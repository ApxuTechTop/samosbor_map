namespace $ {



	export function bigint_to_rank( val: bigint | undefined | null, def?: typeof $hyoo_crus_rank.Value ): typeof $hyoo_crus_rank.Value {
		if( val == null ) {
			return def!
		}
		const num = Number( val )
		return num as typeof $hyoo_crus_rank.Value
	}
	export function rank_to_bigint( rank: typeof $hyoo_crus_rank.Value ) {
		return BigInt( rank )
	}

	export class $apxu_samosbor_map_role extends $hyoo_crus_atom_enum( [ "cartographer", "researcher", "traveler" ] ) {}

	export class $apxu_samosbor_map_role_right extends $hyoo_crus_dict.with( {
		Key: $hyoo_crus_atom_str,
		Description: $hyoo_crus_atom_str,
		Role: $apxu_samosbor_map_role,
	} ) {
		@$mol_mem
		key( next?: string ) {
			return this.Key( true )?.val( next ) ?? ""
		}
		@$mol_mem
		description( next?: string ) {
			return this.Description( true )?.val( next ) ?? ""
		}
		@$mol_mem
		role( next?: typeof $apxu_samosbor_map_role.options[ number ] ) {
			return this.Role( true )?.val( next ) ?? "no_role"
		}
	}

	// export class $apxu_samosbor_map_role extends $hyoo_crus_dict.with({
	// 	Rights: $hyoo_crus_dict_to($apxu_samosbor_map_role_right),
	// 	Default: $hyoo_crus_atom_int,
	// 	Ruler: $hyoo_crus_atom_str,
	// }) {
	// 	@$mol_mem
	// 	public_keys(next?: string[]) {
	// 		return next ?? this.Rights(true)?.keys() ?? []
	// 	}
	// 	@$mol_action
	// 	add_key() {}
	// 	// @$mol_mem
	// 	// ranks() {
	// 	// 	return this.public_keys().map((key) => {
	// 	// 		return this.rank(key as string)
	// 	// 	})
	// 	// }
	// 	@$mol_mem
	// 	rank() {
	// 		return $hyoo_crus_rank_join( "just" ) // TODO
	// 	}
	// 	// @$mol_mem_key
	// 	// rank(key: string, next?: typeof $hyoo_crus_rank.Value) {
	// 	// 	return bigint_to_rank(this.Rights(true)!.key(key)?.Rank(true)?.val(next && rank_to_bigint(next)), this.default_rank())
	// 	// }
	// 	@$mol_mem
	// 	ruler_key() {
	// 		return "my_key" // TODO
	// 	}
	// 	@$mol_mem
	// 	preset(ignore?: $hyoo_crus_auth) {
	// 		const mapped_ranks = (this.public_keys().reduce((acc: {[key: string]: typeof $hyoo_crus_rank.Value}, key) => {
	// 			acc[key as string] = this.rank()
	// 			return acc
	// 		}, {}))
	// 		return {
	// 			[this.ruler_key()]: $hyoo_crus_rank_rule,

	// 		}
	// 	}
	// }

	export class $apxu_samosbor_map_role_infos extends $hyoo_crus_dict.with( {
		Rights: $hyoo_crus_list_ref_to( () => $apxu_samosbor_map_role_right ),
		Ruler: $hyoo_crus_atom_str,
	} ) {
		@$mol_mem
		get_rights() {
			return this.Rights( true )?.remote_list()
		}
		@$mol_mem
		ruler_key() {
			return this.Ruler( true )?.val() ?? $apxu_samosbor_map_app_my_public_key
		}
		@$mol_action
		add_key( key: string ) {
			const new_rights = this.Rights( true )?.make( { '': $hyoo_crus_rank_read } )
			new_rights?.key( key )
			new_rights?.role( "researcher" )

			return new_rights
		}
		@$mol_mem_key
		lord_rights( key: string ) {
			const finded = this.get_rights()?.find( ( right ) => { return right.key() === key } )
			return finded
		}
		@$mol_mem_key
		lord_role( key: string, next?: typeof $apxu_samosbor_map_role.options[ number ] | "no_role" ) {
			const finded = this.lord_rights( key )
			console.log( finded )
			if( next === "no_role" ) {
				if( finded ) {
					this.Rights( true )?.cut( finded.ref() )
				}

				return "no_role"
			}
			return finded?.role( next )
		}

		rank_for_role( current_role: typeof $apxu_samosbor_map_role.options[ number ] | "no_role", needed_role: typeof $apxu_samosbor_map_role.options[ number ] ) {
			if( needed_role === "traveler" ) {
				return $hyoo_crus_rank_join( "just" )
			}
			if( current_role === needed_role ) {
				return $hyoo_crus_rank_post( "just" )
			}
			if( current_role === "cartographer" && needed_role === "researcher" ) {
				return $hyoo_crus_rank_post( "just" )
			}
			return $hyoo_crus_rank_join( "just" )
		}

		@$mol_mem_key
		preset( role: typeof $apxu_samosbor_map_role.options[ number ] ) {
			const all_rights = this.get_rights()
			const preset: { [ key: string ]: typeof $hyoo_crus_rank.Value } = {}
			for( const right of all_rights ?? [] ) {
				preset[ right.key() ] = this.rank_for_role( right.role(), role )
			}
			console.log( "RULER KEY", this.ruler_key() )
			preset[ this.ruler_key() ] = $hyoo_crus_rank_rule
			return preset
		}
		@$mol_mem_key
		preset_no_current( role: typeof $apxu_samosbor_map_role.options[ number ] ) {
			const preset = { ...this.preset( role ) }
			console.log( "no current preset", preset )
			delete preset[ $hyoo_crus_auth.current().public().toString() ]
			return preset
		}
	}
}
