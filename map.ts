namespace $ {
	export class $apxu_samosbor_map extends $hyoo_crus_dict.with( {
		Gigacluster: $hyoo_crus_atom_ref_to( () => $apxu_samosbor_map_gigacluster ),
		Version: $hyoo_crus_atom_str,
		Roles: $hyoo_crus_atom_ref_to( () => $apxu_samosbor_map_role_infos )
	} ) {
		@$mol_mem
		roles() {
			return this.Roles( true )?.ensure( { '': $hyoo_crus_rank_read } ) ?? new $apxu_samosbor_map_role_infos
		}
		@$mol_mem
		gigacluster() {
			const gigacluster = this.Gigacluster( null )?.ensure( { '': $hyoo_crus_rank_join( "just" ) } )
			gigacluster!.create_block = () => this.create_block()
			const can_rule = gigacluster?.land().lord_rank( $hyoo_crus_auth.current().lord() ) == $hyoo_crus_rank_rule
			const roles = this.roles()
			if( can_rule ) {
				const cartographers_preset = roles.preset_no_current( "cartographer" )
				Object.entries( cartographers_preset ).map( ( [ key, rank ] ) => {
					gigacluster.land().lord_rank( $hyoo_crus_auth.from( key as string ).lord(), rank )
				} )
			}

			return gigacluster
		}
		@$mol_action
		create_block() {
			const roles = this.roles()
			const researchers_preset = roles.preset_no_current( "researcher" )
			const current_auth = $hyoo_crus_auth.current()
			const block = this.gigacluster()?.Blocks( true )?.make( { ...researchers_preset, '': $hyoo_crus_rank_join( "just" ) } )
			console.log( "created", block )
			return block!
		}
		@$mol_mem
		blocks() {
			const gigacluster = this.gigacluster()
			const blocks = gigacluster?.blocks()
			const roles = this.roles()
			const researchers_preset = { ...roles.preset_no_current( "researcher" ) }
			delete researchers_preset[ roles.ruler_key() ]
			blocks?.map( ( block ) => {
				const land = block.land()
				const can_rule = land.lord_rank( $hyoo_crus_auth.current().lord() ) == $hyoo_crus_rank_rule
				if( can_rule ) {
					Object.entries( researchers_preset ).map( ( [ key, rank ] ) => {
						const auth = $hyoo_crus_auth.from( key )
						const is_owner = land.ref().description! == auth.lord().description!
						if( !is_owner ) {
							land.lord_rank( auth.lord(), rank )
						}
					} )
				}
			} )

			return blocks
		}

		@$mol_action
		save() {
			const data = {
				blocks: {} as any
			}
			const blocks = $apxu_samosbor_map_storage.current()?.blocks() ?? []
			const normal_keys = [
				"direction", "block_type", "generator_floor", 
				"left_flight_status", "left_flight_type", "right_flight_status", 
				"right_flight_type", "middle_flight_type", 
				"name", "pos_x", "pos_y",
				"layer", "min_floor", "max_floor"
			] as (keyof typeof blocks[0])[];
			const bigint_keys = ["board_floor", "flood_floor", "roof_floor", "mail_floor"]
			for (const block of blocks) {
				const block_data = {} as {[key: string]: any}
				for (const key of normal_keys as string[]) {
					block_data[key] = (block as any)[key]()
				}
				block_data.is_pipe = block.IsPipe()?.val()
				block_data.IsMiddleFlight = block.IsMiddleFlight()?.val()
				for (const key of bigint_keys) {
					const big_value = (block as any)[key]()
					block_data[key] = big_value !== null ? Number(big_value) : null
				}
				const floors_data = {} as any
				for (let floor = block.min_floor(); floor < block.max_floor(); floor++) {
					const floor_data = block.FloorsData()?.key(floor)
					const floor_saved_data = {} as any
					if (floor_data) {
						for (const passage_key in PassageDirections) {
							const type = floor_data[passage_key as "UpLeftPassage"]()?.Type()?.val()
							floor_saved_data[passage_key] = type
						}
						const fence = floor_data.Fence()?.val()
						floor_saved_data.fence = fence
						const left_flight = floor_data.LeftFlight()?.val()
						const right_flight = floor_data.RightFlight()?.val()
						const is_double = floor_data.IsDouble()?.val()
						floor_saved_data.left_flight = left_flight
						floor_saved_data.right_flight = right_flight
						floor_saved_data.is_double = is_double
					}
					

					floors_data[floor] = floor_saved_data
				}
				block_data.floors_data = floors_data
				block_data.transitions = block.transitions().map((transition) => {
					const save_port = (port: TransitionPort | null) => {
						const block_ref = port?.Block()?.val()
						const block = block_ref ? $hyoo_crus_glob.Node(block_ref, $apxu_samosbor_map_block_data) : null
						return {
							block: block?.name(),
							floor: port?.Floor()?.val(),
							position: port?.Position()?.val()
						}
					}
					return {
						from: save_port(transition.From()),
						to: save_port(transition.To())
					}
				})
				
				data.blocks[block.ref().description!] = block_data
			}

			return data
		}
	}
}
