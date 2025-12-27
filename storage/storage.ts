namespace $ {


	export class $apxu_samosbor_map_storage extends $hyoo_crus_home.with( {
		Maps: $hyoo_crus_list_ref_to( () => $apxu_samosbor_map )
	} ) {
		@$mol_mem
		static global() {
			const storage_ref = $apxu_samosbor_map_app_storage_ref()
			//const storage_ref = null
			const storage = storage_ref ? $hyoo_crus_glob.Node( $hyoo_crus_ref( storage_ref ), $apxu_samosbor_map_storage ) : $hyoo_crus_glob.home( $apxu_samosbor_map_storage )
			console.log( "STORAGE REF: ", storage.ref() )
			// TODO
			return storage
		}
		@$mol_mem
		static active_map( next?: number ) {
			return next ?? 0
		}
		@$mol_mem
		static current() {
			const current_id = this.active_map()
			const maps_field = this.global().Maps( true )
			// вот тут надо дождаться загрузки
			const maps = maps_field?.remote_list() ?? []
			const map = maps[ current_id ] ? maps[ current_id ] : maps_field?.make( { '': $hyoo_crus_rank_read } )
			return map
		}

		@$mol_action
		static saved_refs_to_obj( saved_refs: { [ ref: string ]: any } = {} ) {
			const result: any = {}
			for( const key of Object.keys( saved_refs ) ) {
				const val = saved_refs[ key as any ]
				result[ key ] = val

				for( const [ k, v ] of Object.entries( val ?? [] ) ) {
					if( saved_refs[ v as any ] ) {
						result[ key ][ k ] = saved_refs[ v as any ]
					}
				}
			}
			return result
		}

		@$mol_action
		static save( object: any, saved_refs: { [ ref: string ]: any } = {} ): any {
			if( object === null ) {
				return null
			}
			const object_ref = object.ref().description

			if( saved_refs[ object_ref ] ) {
				return object_ref
			}

			const prototype = Object.getPrototypeOf( object )

			if( prototype instanceof $hyoo_crus_dict ) {
				const saved_data = this.save_dict( object, saved_refs )
				return saved_data
			}
			if( prototype instanceof $hyoo_crus_list_ref_base ) {
				return this.save_list( object, saved_refs )
			}
			if( prototype instanceof $hyoo_crus_atom_ref_base ) {
				const saved_data = this.save_ref( object, saved_refs )
				return saved_data
			}
			if( object instanceof $hyoo_crus_atom_int ) {
				const big_value = object.val()
				const val = ( big_value != undefined ) ? Number( big_value ) : big_value
				return val
			}
			if( object instanceof $hyoo_crus_atom_bool ) {
				const val = object.val()
				return val
			}
			if( object instanceof $hyoo_crus_atom_str ) {
				const val = object.val()
				return val
			}
			if( object instanceof $hyoo_crus_atom_enum_base ) {
				const val = this.save_enum( object as any, saved_refs )
				return val
			}
		}
		@$mol_action
		static save_enum( object: any, saved_refs?: { [ ref: string ]: any } ) {
			return object.val()
		}
		@$mol_action
		static save_ref( ref_object: any, saved_refs?: { [ ref: string ]: any } ) {
			const object = ref_object?.remote()
			return this.save( object, saved_refs )
		}
		@$mol_action
		static save_dict( object: any, saved_refs: { [ ref: string ]: any } ) {
			const result = {} as any
			const prototype = Object.getPrototypeOf( object )
			const schema = Object.getPrototypeOf( prototype ).constructor.schema
			const keys = Object.keys( schema )
			const object_ref: string = object.ref().description
			saved_refs[ object_ref ] = result
			for( const key of keys ) {
				const typedKey = key as keyof typeof schema
				const field = ( ( object as any )[ typedKey ] as any )()
				result[ key ] = this.save( field, saved_refs )
			}

			return object_ref
		}
		@$mol_action
		static save_list( list: any, saved_refs: { [ ref: string ]: any } ) {
			const result: any[] = []
			const object_ref = list.ref().description
			saved_refs[ object_ref ] = result
			for( const [ key, object ] of Object.entries( list.remote_list() ) ) {
				result.push( this.save( object, saved_refs ) )
			}

			return object_ref
		}
	}
}
