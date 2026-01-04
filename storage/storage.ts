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

		static async save( sync_object: any, saved_refs: { [ ref: string ]: any } = {} ): Promise<any> {
			if( sync_object === null ) {
				return null
			}
			const object = $mol_wire_async( sync_object )
			const object_ref = ( await object.ref() ).description
			if( saved_refs[ object_ref ] ) {
				return object_ref
			}

			const prototype = Object.getPrototypeOf( object )
			if( prototype instanceof $hyoo_crus_dict && ( object as any ).Value ) {
				const saved_data = await this.save_dict( object, saved_refs )
				return saved_data
			}
			if( prototype instanceof $hyoo_crus_dict ) {
				const saved_data = await this.save_struct( object, saved_refs )
				return saved_data
			}
			if( prototype instanceof $hyoo_crus_list_ref_base ) {
				return await this.save_list( object, saved_refs )
			}
			if( prototype instanceof $hyoo_crus_atom_ref_base ) {
				const saved_data = await this.save_ref( object, saved_refs )
				return saved_data
			}
			if( object instanceof $hyoo_crus_atom_int ) {
				const big_value = await object.val()
				const val = ( big_value != undefined ) ? Number( big_value ) : big_value
				return val
			}
			if( object instanceof $hyoo_crus_atom_bool ) {
				const val = await object.val()
				return val
			}
			if( object instanceof $hyoo_crus_atom_str ) {
				const val = await object.val()
				return val
			}
			if( object instanceof $hyoo_crus_atom_enum_base ) {
				const val = await this.save_enum( object as any, saved_refs )
				return val
			}
		}
		static async save_enum( object: any, saved_refs?: { [ ref: string ]: any } ) {
			return await object.val()
		}
		static async save_ref( async_ref_object: any, saved_refs?: { [ ref: string ]: any } ) {
			const object = await async_ref_object.remote()
			return await this.save( object, saved_refs )
		}

		static async save_struct( object: any, saved_refs: { [ ref: string ]: any } ) {
			const result = {} as any
			const prototype = Object.getPrototypeOf( object )
			const schema = Object.getPrototypeOf( prototype ).constructor.schema
			const keys = ( await object.keys() )
			const object_ref: string = ( await object.ref() ).description
			saved_refs[ object_ref ] = result
			for( const key of keys ) {
				const typedKey = key as keyof typeof schema
				const field = await ( ( object as any )[ typedKey ] as any )()
				const val = await this.save( field, saved_refs )
				if( val !== null ) {
					result[ key ] = val
				}

			}

			return object_ref
		}

		static async save_dict( object: any, saved_refs: { [ ref: string ]: any } ) {
			const result = {} as any
			const object_ref: string = ( await object.ref() ).description
			saved_refs[ object_ref ] = result
			const keys = ( await object.keys() )
			for( const key of keys ) {
				const val = await object.key( key )
				const saved_val = await this.save( val, saved_refs )
				if( val !== null ) {
					result[ key ] = saved_val
				}
			}
			return object_ref
		}

		static async save_list( list: any, saved_refs: { [ ref: string ]: any } ) {
			const result: any[] = []
			const object_ref = ( await list.ref() ).description
			saved_refs[ object_ref ] = result
			for( const [ key, object ] of Object.entries( await list.remote_list() ) ) {
				result.push( await this.save( object as any, saved_refs ) )
			}

			return object_ref
		}
	}
}
