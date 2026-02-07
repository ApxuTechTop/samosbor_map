namespace $ {

	const use_giper_baza: false = false as const
	type DeepObject = {
		[ key: string ]: unknown | DeepObject
	}

	function isObject( value: unknown ): value is Record<string, unknown> {
		return value !== null && typeof value === 'object' && !Array.isArray( value )
	}

	function isBigInt( value: unknown ): value is bigint {
		return typeof value === 'bigint'
	}

	function deepConvertBigIntToNumber<T>( obj: T ): T {
		if( isBigInt( obj ) ) {
			// Преобразуем BigInt в number
			// Внимание: большие BigInt значения могут потерять точность при преобразовании
			return Number( obj ) as unknown as T
		}

		if( Array.isArray( obj ) ) {
			// Обрабатываем массивы рекурсивно
			return obj.map( item => deepConvertBigIntToNumber( item ) ) as unknown as T
		}

		if( isObject( obj ) ) {
			// Обрабатываем объекты рекурсивно
			const result: Record<string, unknown> = {}

			for( const [ key, value ] of Object.entries( obj ) ) {
				result[ key ] = deepConvertBigIntToNumber( value )
			}

			return result as unknown as T
		}

		// Возвращаем примитивные значения без изменений
		return obj
	}
	type FunctionResultPromisify<Some> = Some extends ( ...args: infer Args ) => infer Res
		? Res extends PromiseLike<unknown> ? Some : ( ...args: Args ) => Promise<Res>
		: Some

	type MethodsResultPromisify<Host extends Object> = {
		[ K in keyof Host ]: ObjectOrFunctionResultPromisify<Host[ K ]>
	}

	type ObjectOrFunctionResultPromisify<Some> = (
		Some extends ( ...args: any ) => unknown ? FunctionResultPromisify<Some> : {}
	) & ( Some extends Object ? MethodsResultPromisify<Some> : Some )

	export function recursive_wire_async<Host extends object>( obj: Host ) {

		let fiber: $mol_wire_fiber<any, any, any>
		const temp = $mol_wire_task.getter( obj as ( ...args: any[] ) => any )

		return new Proxy( obj, {

			get( obj, field ) {

				const val = ( obj as any )[ field ]
				if( typeof val !== 'function' ) return val

				let fiber: $mol_wire_fiber<any, any, any>
				const temp = $mol_wire_task.getter( val )

				return function $mol_wire_async( this: Host, ...args: any[] ) {
					fiber?.destructor()
					fiber = temp( obj, args )
					return fiber.async().then( ( result ) => {
						if( typeof result !== "object" ) {
							return result
						}
						return recursive_wire_async( result )
					} )
				}

			},

			apply( obj, self, args ) {
				fiber?.destructor()
				fiber = temp( self, args )
				return fiber.async()
			},

		} ) as unknown as ObjectOrFunctionResultPromisify<Host>

	}

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
			let has_data = false
			for( const key of keys ) {
				const typedKey = key as keyof typeof schema
				const field = await ( ( object as any )[ typedKey ] as any )()
				const val = await this.save( field, saved_refs )
				if( val !== null ) {
					has_data = true
					result[ key ] = val
				}

			}
			if( !has_data ) {
				delete saved_refs[ object_ref ]
				return undefined
			}
			return object_ref
		}

		static async save_dict( object: any, saved_refs: { [ ref: string ]: any } ) {
			const result = {} as any
			const object_ref: string = ( await object.ref() ).description
			saved_refs[ object_ref ] = result
			const keys = ( await object.keys() )
			let has_data = false
			for( const key of keys ) {
				const val = await object.key( key )
				const saved_val = await this.save( val, saved_refs )
				if( val !== null && saved_val != null ) {
					has_data = true
					result[ key ] = saved_val
				}
			}
			if( !has_data ) {
				delete saved_refs[ object_ref ]
				return undefined
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

		static ref_to_string( ref?: $hyoo_crus_ref | null | $giper_baza_link ) {
			if( !ref ) return
			const r = ref as $hyoo_crus_ref
			const link = ref as $giper_baza_link
			return use_giper_baza ? link.toString() : r?.description
		}
		static get_object_ref( object: $hyoo_crus_node ): $hyoo_crus_ref
		// static get_object_ref(object: $giper_baza_node): $giper_baza_link;
		static get_object_ref( object: $hyoo_crus_node | $giper_baza_pawn ): $giper_baza_link | $hyoo_crus_ref {
			const crus_object = object as $hyoo_crus_node
			const giper_object = object as $giper_baza_pawn
			if( use_giper_baza ) {
				return giper_object.link()
			} else {
				return crus_object.ref()
			}
		}

		static get_object_string_ref( object: $hyoo_crus_node | $giper_baza_pawn ) {
			return this.ref_to_string( this.get_object_ref( object as any ) )
		}

		static get_transition_data = ( transition: TransitionData ) => {
			return {
				From: {
					Block: this.ref_to_string( transition.From()?.Block()?.val() ),
					Floor: transition.From()?.Floor()?.val() ?? undefined,
					Position: transition.From()?.Position()?.val() ?? undefined
				},
				To: {
					Block: this.ref_to_string( transition.To()?.Block()?.val() ),
					Floor: transition.To()?.Floor()?.val() ?? undefined,
					Position: transition.To()?.Position()?.val() ?? undefined
				}
			}
		}

		@$mol_mem_key
		static save_map( map: $apxu_samosbor_map ) {

			const result: { Gigacluster: { Blocks: string[] } } = { Gigacluster: { Blocks: [] } }

			const gigacluster = map.Gigacluster()?.remote()
			if( !gigacluster ) return
			const blocks = gigacluster.Blocks()?.remote_list()
			if( !blocks ) return
			const saved_transition_nodes: { [ ref: string ]: ReturnType<typeof $apxu_samosbor_map_storage.get_transition_data> } = {}
			const get_block_data = ( block: $apxu_samosbor_map_block_data ) => {
				const block_data = {
					BoardFloor: block.BoardFloor()?.val(),
					CanCreateBlock: block.CanCreateBlock()?.val(),
					Description: block.Description()?.text(),
					Direction: block.Direction()?.val() ?? undefined,
					FloodFloor: block.FloodFloor()?.val(),
					Generator: block.Generator()?.val(),
					HasBalcony: block.HasBalcony()?.val(),
					IsMiddleFlight: block.IsMiddleFlight()?.val(),
					IsPipe: block.IsPipe()?.val(),
					Layer: block.Layer()?.val(),
					LeftFlight: {
						Status: block.LeftFlight()?.Status()?.val() ?? undefined,
						Type: block.LeftFlight()?.Type()?.val() ?? undefined
					},
					MailFloor: block.MailFloor()?.val(),
					MaxFloor: block.MaxFloor()?.val(),
					MiddleFlight: {
						Status: block.MiddleFlight()?.Status()?.val() ?? undefined,
						Type: block.MiddleFlight()?.Status()?.val() ?? undefined
					},
					MinFloor: block.MinFloor()?.val(),
					Name: block.Name()?.val(),
					Places: block.Places()?.remote_list().map( ( place ) => {
						return { Floor: place.Floor()?.val(), Type: place.Type()?.val() ?? undefined }
					} ),
					PositionX: block.PositionX()?.val(),
					PositionY: block.PositionY()?.val(),
					Professions: block.Professions()?.remote_list().map( ( profession ) => {
						return {
							Floor: profession.Floor()?.val(),
							Type: profession.Type()?.val() ?? undefined
						}
					} ),
					RightFlight: {
						Status: block.RightFlight()?.Status()?.val() ?? undefined,
						Type: block.RightFlight()?.Type()?.val() ?? undefined,
					},
					RoofFloor: block.RoofFloor()?.val(),
					FloorsData: block.FloorsData()?.keys().map( ( floor ) => {
						const floor_data = block.FloorsData()?.key( floor )
						const save_passage_data = ( object?: PassageData | null ) => {
							if( !object ) return
							const Status = object.Status()?.val() ?? undefined
							const Type = object.Type()?.val() ?? undefined
							if( !Status && !Type ) return
							return {
								Status: Status,
								Type: Type,
							}
						}
						const IsDouble = floor_data?.IsDouble()?.val() ?? undefined
						const UpLeftPassage = save_passage_data( floor_data?.UpLeftPassage() )
						const UpMiddlePassage = save_passage_data( floor_data?.UpMiddlePassage() )
						const UpRightPassage = save_passage_data( floor_data?.UpRightPassage() )
						const LeftPassage = save_passage_data( floor_data?.LeftPassage() )
						const RightPassage = save_passage_data( floor_data?.RightPassage() )
						const DownLeftPassage = save_passage_data( floor_data?.DownLeftPassage() )
						const DownMiddlePassage = save_passage_data( floor_data?.DownMiddlePassage() )
						const DownRightPassage = save_passage_data( floor_data?.DownRightPassage() )
						const Fence = floor_data?.Fence()?.val() ?? undefined
						const LeftFlight = floor_data?.LeftFlight()?.val() ?? undefined
						const RightFlight = floor_data?.RightFlight()?.val() ?? undefined

						const data = {
							...( UpLeftPassage !== undefined && { UpLeftPassage } ),
							...( UpMiddlePassage !== undefined && { UpMiddlePassage } ),
							...( UpRightPassage !== undefined && { UpRightPassage } ),
							...( LeftPassage !== undefined && { LeftPassage } ),
							...( RightPassage !== undefined && { RightPassage } ),
							...( DownLeftPassage !== undefined && { DownLeftPassage } ),
							...( DownMiddlePassage !== undefined && { DownMiddlePassage } ),
							...( DownRightPassage !== undefined && { DownRightPassage } ),
							...( Fence !== undefined && { Fence } ),
							...( IsDouble !== null && IsDouble !== undefined && { IsDouble } ),
							...( LeftFlight !== undefined && { LeftFlight } ),
							...( RightFlight !== undefined && { RightFlight } ),
						}
						return [ floor, data ] as const
						// return [floor as number, {
						// 	...Object.fromEntries(passage_keys.map((key) => {
						// 		const object = floor_data?.[key]()
						// 		// if (!object) return [];
						// 		return [key, {Status: object?.Status()?.val() ?? undefined, Type: object?.Type()?.val() ?? undefined}]
						// 	}))
						// }] as const
					} ).filter( ( [ floor, data ] ) => {
						return Object.keys( data ).length > 0
					} ),
					Title: block.Title()?.val(),
					Transitions: block.Transitions()?.remote_list().map( ( transition ) => {
						const transition_ref = this.get_object_string_ref( transition )
						if( transition_ref && !saved_transition_nodes[ transition_ref ] ) {
							saved_transition_nodes[ transition_ref ] = this.get_transition_data( transition )
						}
						return transition_ref
					} ),
					Type: block.Type()?.val() ?? undefined,
				}
				return block_data
			}
			const saved_block_nodes: { [ ref: string ]: ReturnType<typeof get_block_data> } = {}


			for( const block of blocks ) {
				const block_data = get_block_data( block )
				const block_ref = this.get_object_string_ref( block )
				if( !block_ref ) {
					console.error( "No block ref", block )
					continue
				}
				result.Gigacluster.Blocks.push( block_ref )
				saved_block_nodes[ block_ref ] = block_data
			}

			return deepConvertBigIntToNumber( { result, saved_block_nodes, saved_transition_nodes } )
		}

		static async load_map( map: $apxu_samosbor_map, result: { Gigacluster: { Blocks: string[] } }, saved_block_nodes: ( NonNullable<ReturnType<typeof $apxu_samosbor_map_storage.save_map>> )[ "saved_block_nodes" ], saved_transition_nodes: ( NonNullable<ReturnType<typeof $apxu_samosbor_map_storage.save_map>> )[ "saved_transition_nodes" ] ) {
			const get_read_preset = () => {
				return { '': $hyoo_crus_rank_read }
			}
			const Gigacluster = await $mol_wire_async( map ).Gigacluster( true )
			if( !Gigacluster ) return
			const gigacluster = await $mol_wire_async( Gigacluster ).ensure()
			if( !gigacluster ) return
			const Blocks = await $mol_wire_async( gigacluster ).Blocks( true )
			if( !Blocks ) return
			const blocks_node = $mol_wire_async( Blocks )
			const init_blocks = await blocks_node.remote_list()
			const blocks = result.Gigacluster.Blocks
			const saved_nodes: { [ id: string ]: any } = {}
			const get_block = async ( block_ref: string ) => {
				const ind = Object.keys( saved_nodes ).length
				if( saved_nodes[ block_ref ] ) return saved_nodes[ block_ref ] as $apxu_samosbor_map_block_data
				if( ind < init_blocks.length ) {
					const block = init_blocks[ ind ]
					saved_nodes[ block_ref ] = block
					return block
				}
				const block = await blocks_node.make( get_read_preset() )
				saved_nodes[ block_ref ] = block
				return block
			}
			const block_simple_keys = [ "BoardFloor", "CanCreateBlock", "Direction",
				"FloodFloor", "Generator", "HasBalcony", "IsMiddleFlight", "IsPipe",
				"Layer", "MailFloor", "MaxFloor", "MinFloor", "Name", "PositionX", "PositionY",
				"RoofFloor", "Type"
			] as const
			for( const [ _, block_ref ] of Object.entries( blocks ) ) {
				const block = await get_block( block_ref )
				const async_block = $mol_wire_async( block )
				const block_data = saved_block_nodes[ block_ref ]
				console.log( block_ref, block_data )
				// await (await block.BoardFloor(block_data.BoardFloor))?.val(block_data.BoardFloor)
				// await (await block.CanCreateBlock(block_data.CanCreateBlock))?.val(block_data.CanCreateBlock)
				for( const key of block_simple_keys ) {
					const data = block_data[ key ]
					const node = await async_block[ key ]( data )
					if( node ) {
						await $mol_wire_async( node ).val( data as any )
					}
				}
				const Description = ( await async_block.Description( block_data.Description ) )
				Description && await $mol_wire_async( Description )?.text( block_data.Description )
				// block.Direction(block_data.Direction)?.val(block_data.Direction)
				// block.FloodFloor(block_data.FloodFloor)?.val(block_data.FloodFloor)
				// block.Generator(block_data.Generator)?.val(block_data.Generator)
				// block.HasBalcony(block_data.HasBalcony)?.val(block_data.HasBalcony)
				// block.IsMiddleFlight(block_data.IsMiddleFlight)?.val(block_data.IsMiddleFlight)
				// block.IsPipe(block_data.IsPipe)?.val(block_data.IsPipe)
				// block.Layer(block_data.Layer)?.val(block_data.Layer)
				const process_flight_data = async ( key: "LeftFlight" | "MiddleFlight" | "RightFlight", flight_data: any ) => {
					const Flight = await async_block[ key ]( flight_data )
					if( Flight ) {
						const async_flight = $mol_wire_async( Flight )
						const Status = await async_flight.Status( flight_data.Status )
						if( Status ) $mol_wire_async( Status ).val( flight_data.Status )
						const Type = await async_flight.Type( flight_data.Type )
						if( Type ) $mol_wire_async( Type ).val( flight_data.Type )
					}
				}
				await process_flight_data( "LeftFlight", block_data.LeftFlight )
				await process_flight_data( "MiddleFlight", block_data.MiddleFlight )
				await process_flight_data( "RightFlight", block_data.RightFlight )
				// block.LeftFlight(block_data.LeftFlight)?.Status(block_data.LeftFlight.Status)?.val(block_data.LeftFlight.Status)
				// block.LeftFlight(block_data.LeftFlight)?.Type(block_data.LeftFlight.Type)?.val(block_data.LeftFlight.Type)
				// block.MailFloor(block_data.MailFloor)?.val(block_data.MailFloor)
				// block.MaxFloor(block_data.MaxFloor)?.val(block_data.MaxFloor)
				// block.MiddleFlight(block_data.MiddleFlight)?.Status(block_data.MiddleFlight.Status)?.val(block_data.MiddleFlight.Status)
				// block.MiddleFlight(block_data.MiddleFlight)?.Status(block_data.MiddleFlight.Type)?.val(block_data.MiddleFlight.Type)
				// block.MinFloor(block_data.MinFloor)?.val(block_data.MinFloor)
				// block.Name(block_data.Name)?.val(block_data.Name)
				const process_place_data = async ( node: any, data: any ) => {
					if( node ) {
						for( const place of data ?? [] ) {
							const new_place = await $mol_wire_async( node ).make( null )
							if( !new_place ) continue
							const async_place = $mol_wire_async( new_place )
							const Floor = await async_place.Floor( place.Floor )
							if( Floor ) await $mol_wire_async( Floor ).val( place.Floor )
							const Type = await async_place.Type( place.Type )
							if( Type ) await $mol_wire_async( Type ).val( place.Type )
						}
					}
				}

				const Places = await async_block.Places( block_data.Places )
				await process_place_data( Places, block_data.Places )
				// if (Places) {
				// 	for (const place of block_data.Places ?? []) {
				// 		const new_place = await $mol_wire_async(Places).make(null)
				// 		if (!new_place) continue;
				// 		const async_place = $mol_wire_async(new_place)
				// 		const Floor = await async_place.Floor(place.Floor)
				// 		if (Floor) await $mol_wire_async(Floor).val(place.Floor)
				// 		const Type = await async_place.Type(place.Type)
				// 		if (Type) await $mol_wire_async(Type).val(place.Type)
				// 	}
				// }

				// block.PositionX(block_data.PositionX)?.val(block_data.PositionX)
				// block.PositionY(block_data.PositionY)?.val(block_data.PositionY)
				const Professions = await async_block.Professions( block_data.Professions )
				await process_place_data( Professions, block_data.Professions )
				// block_data.Professions?.forEach((profession) => {
				// 	const new_profession = block.Professions(true)?.make(null)
				// 	new_profession?.Floor(profession.Floor)?.val(profession.Floor)
				// 	new_profession?.Type(profession.Type)?.val(profession.Type)
				// })

				// block.RightFlight(block_data.RightFlight)?.Status(block_data.RightFlight.Status)?.val(block_data.RightFlight.Status)
				// block.RightFlight(block_data.RightFlight)?.Type(block_data.RightFlight.Type)?.val(block_data.RightFlight.Type)
				// block.RoofFloor(block_data.RoofFloor)?.val(block_data.RoofFloor)
				const FloorsData = await async_block.FloorsData( block_data.FloorsData )
				if( FloorsData ) {
					const AsyncFloorsData = $mol_wire_async( FloorsData )
					for( const [ floor, passages_data ] of block_data.FloorsData ?? [] ) {
						const FloorNode = $mol_wire_async( await AsyncFloorsData.key( floor, passages_data ) )
						for( const key in PassageDirections ) {
							const dir = key as keyof typeof PassageDirections
							const passage_data = passages_data[ dir ]
							const Passage = await FloorNode[ dir ]( passage_data )
							if( !Passage ) continue
							const AsyncPassage = $mol_wire_async( Passage )
							const Status = await AsyncPassage.Status( passage_data?.Status )
							if( Status ) await $mol_wire_async( Status ).val( passage_data?.Status )
							const Type = await AsyncPassage.Type( passage_data?.Type )
							if( Type ) await $mol_wire_async( Type ).val( passage_data?.Type )
						}
						// const floor_data = block.FloorsData(block_data.FloorsData)?.key(floor, passages_data)

						const Fence = await FloorNode.Fence( passages_data.Fence )
						if( Fence ) await $mol_wire_async( Fence ).val( passages_data.Fence )
						const IsDouble = await FloorNode.IsDouble( passages_data.IsDouble )
						if( IsDouble ) await $mol_wire_async( IsDouble ).val( passages_data.IsDouble )
						const LeftFlight = await FloorNode.LeftFlight( passages_data.LeftFlight )
						if( LeftFlight ) await $mol_wire_async( LeftFlight ).val( passages_data.LeftFlight )
						const RightFlight = await FloorNode.RightFlight( passages_data.RightFlight )
						if( RightFlight ) await $mol_wire_async( RightFlight ).val( passages_data.RightFlight )
					}
				}



				// // TODO all

				const transition_refs = saved_block_nodes[ block_ref ].Transitions as string[]
				const Transitions = await async_block.Transitions( true )
				if( Transitions ) {
					const AsyncTransitions = $mol_wire_async( Transitions )
					for( const transition_ref of transition_refs ) {
						if( saved_nodes[ transition_ref ] ) {
							await AsyncTransitions.remote_add( saved_nodes[ transition_ref ] )
						} else {
							const transition_node = await AsyncTransitions.make( null )
							const transition = $mol_wire_async( transition_node )
							const From = await transition.From( true )
							const process_port = async ( port: TransitionPort | null, data: typeof transition_data.From ) => {
								if( !port ) return
								const async_port = $mol_wire_async( port )
								if( data.Block != undefined ) {
									const from_block_ref = this.get_object_ref( await get_block( data.Block ) )
									const Block = await async_port.Block( true )
									if( Block ) await $mol_wire_async( Block ).val( from_block_ref )
								}
								const Floor = await async_port.Floor( data.Floor )
								if( Floor ) await $mol_wire_async( Floor ).val( data.Floor )
								const Position = await async_port.Position( data.Position )
								if( Position ) await $mol_wire_async( Position ).val( data.Position )
							}
							const transition_data = saved_transition_nodes[ transition_ref ]
							await process_port( From, transition_data.From )
							const To = await transition.To( true )
							await process_port( To, transition_data.To )
							// if (transition_data.From.Block != undefined) {
							// 	const from_block_ref = this.get_object_ref(await get_block(transition_data.From.Block))
							// 	const Block = await AsyncFrom.Block(true)
							// 	if (Block) await $mol_wire_async(Block).val(from_block_ref)
							// }
							// const Floor = await AsyncFrom.Floor(transition_data.From.Floor)
							// if (Floor) await $mol_wire_async(Floor).val(transition_data.From.Floor)
							// transition.From(true)?.Position(true)?.val(transition_data.From.Position)
							// if (transition_data.To.Block != undefined) {
							// 	const to_block_ref = this.get_object_ref(await get_block(transition_data.To.Block))
							// 	transition.To(true)?.Block(true)?.val(to_block_ref)
							// }
							// transition.To(true)?.Floor(true)?.val(transition_data.To.Floor)
							// transition.To(true)?.Position(true)?.val(transition_data.To.Position)

							saved_nodes[ transition_ref ] = transition_node


						}
					}
				}




				// block.Type(block_data.Type)?.val(block_data.Type)
			}
		}
	}
}
