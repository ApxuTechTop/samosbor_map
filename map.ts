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
	}
}
