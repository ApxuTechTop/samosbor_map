namespace $.$$ {

	function isObject( value: unknown ): value is Record<string, unknown> {
		return value !== null && typeof value === 'object' && !Array.isArray( value )
	}

	function isBigInt( value: unknown ): value is bigint {
		return typeof value === 'bigint'
	}

	function deepConvertNumberToBigInt<T>( obj: T ): T {
		if( typeof obj === "number" ) {
			// Преобразуем BigInt в number
			// Внимание: большие BigInt значения могут потерять точность при преобразовании
			return BigInt( obj ) as unknown as T
		}

		if( Array.isArray( obj ) ) {
			// Обрабатываем массивы рекурсивно
			return obj.map( item => deepConvertNumberToBigInt( item ) ) as unknown as T
		}

		if( isObject( obj ) ) {
			// Обрабатываем объекты рекурсивно
			const result: Record<string, unknown> = {}

			for( const [ key, value ] of Object.entries( obj ) ) {
				result[ key ] = deepConvertNumberToBigInt( value )
			}

			return result as unknown as T
		}

		// Возвращаем примитивные значения без изменений
		return obj
	}

	function calculate_score( ref: string, input: string ) {
		let score = 0
		const min_length = Math.min( ref.length, input.length )
		if( min_length === 0 ) return 0

		for( let i = 0; i < min_length; i++ ) {
			const input_char = input.charAt( i )
			for( let k = 0; k < 10; k++ ) inner: {
				for( const d of [ 1, -1 ] ) {
					const ref_pos = i + k * d

					if( ref_pos >= 0 && ref_pos < ref.length ) {
						const ref_char = ref.charAt( ref_pos )
						if( ref_char === input_char ) {
							score += 1 / ( 1 + k )
							break inner
						}
					} else {
						break inner
					}
				}
			}

		}
		return score
	}

	export class $apxu_samosbor_map_app_menu extends $.$apxu_samosbor_map_app_menu {



		@$mol_action
		rotate_map( next?: any ) {
			this.map_inverted( !this.map_inverted() )
		}

		@$mol_action
		hide_click( event?: any ) {
			this.hidden( !this.hidden() )
		}

		rights_visible(): readonly ( any )[] {
			if( this.is_admin() ) return [ this.Rights() ]
			return []
		}

		// save_map_visible() {
		// 	if( this.is_editor() ) return [ this.save_map_button() ]
		// 	return []
		// }

		@$mol_mem
		search_results() {
			const search_input = this.search_value().toLocaleLowerCase()
			if( search_input.length === 0 ) return []
			const blocks = this.gigacluster().blocks()
			const search_items: {
				score: number,
				text: string,
				location: {
					block: $apxu_samosbor_map_block_data,
					floor?: number
				},
				icons?: string[],
			}[] = []
			for( const block of blocks ) {
				const block_text = block.name().toLocaleLowerCase()
				const block_score = calculate_score( block_text, search_input )
				search_items.push( { text: block.name(), score: block_score, location: { block } } )
				if( block_score / block_text.length > 0.80 ) {
					for( let i = block.min_floor_index(); i <= block.max_floor_index(); i++ ) {
						// TODO добавить поддержку двойных этажей
						const display_floor = block.display_floor( i )
						const floor_item_text = `${ block.name() } ${ display_floor }`
						const score = calculate_score( floor_item_text.toLocaleLowerCase(), search_input )
						search_items.push( { location: { block, floor: i }, text: floor_item_text, score } )
					}
				}
			}
			const locations = blocks.flatMap( ( block ) => {
				const block_locations = []
				for( let i = block.min_floor(); i <= block.max_floor(); i++ ) {
					block_locations.push( { location: { block, floor: i }, block, text: `${ block.name() } ${ i }` } )
				}
				return block_locations
			} )
			const liquidator_text = "ликвидаторы"
			const liquidator_score = calculate_score( liquidator_text, search_input )
			const is_liquidator = liquidator_score > 3
			if( is_liquidator ) {
				for( const block of blocks ) {
					for( const prof_data of block.profession_floors( "liquidator" ) ) {
						const floor = prof_data.floor()
						const display_floor = floor != undefined ? block.display_floor( floor ) : ""
						search_items.push( { text: `${ block.name() } ${ display_floor }`, score: liquidator_score, location: { block, floor: floor ?? undefined }, icons: [ "liquidator" ] } )
					}
				}
			}
			const result = search_items
				.filter( ( { score } ) => score > 0.1 )
				.sort( ( a, b ) => { return b.score - a.score } )
				.slice( 0, 10 )
			console.log( result )
			/*
			идея
			для каждого блока посчитать совпадение с поиском
				берем имя блока

			отсортировать по счету
			если счет больше x, дополнительно добавить в результаты этажи блока
			оставить первые 10 элементов
			
			*/

			return result
		}

		search_items(): readonly ( any )[] {
			return this.search_results().map( ( _, i ) => {
				return this.SearchItem( i )
			} )
		}

		search_item_text( id: number ): string {
			return this.search_results()[ id ].text
		}

		searches_container_visible(): readonly ( any )[] {
			if( this.search_results().length === 0 ) return []
			return [ this.searches_container() ]
		}

		item_click( id: number, next?: any ) {
			// если это просто поиск
			this.search_item_click( this.search_results()[ id ] )

			// если это выбор блоков для маршрута
			// то подставить текст в поле
		}

		menu_items(): readonly ( any )[] {
			return this.is_mobile() ? this.mobile_menu() : this.pc_menu()
		}

		@$mol_mem
		menu_state(): string {
			if( this.is_searchbar_focused() ) {
				return "opened"
			}
			return this.block_cards().length > 0 ? "block" : "folded"
		}

		block_info_icon( id: number ) {
			const block = this.search_results()[ id ].location.block
			const block_type = block.block_type()
			const is_pipe = block.IsPipe()?.val()
			if( is_pipe ) {
				return $apxu_samosbor_map_icon_pipe.make( {} )
			}
			if( block_type === "residential" ) {
				return $apxu_samosbor_map_icon_residential.make( {} )
			}
			if( block_type === "infected" ) {
				return $apxu_samosbor_map_icon_infected.make( {} )
			}
			if( block_type === "destroyed" ) {
				return $apxu_samosbor_map_icon_destroyed.make( {} )
			}
			if( block_type === "frozen" ) {
				return $apxu_samosbor_map_icon_frozen.make( {} )
			}
			return undefined as any
		}

		@$mol_mem
		map_items( next?: File[] ) {
			console.log( next?.[ 0 ] )
			const file = next?.[ 0 ]
			if( file ) {
				console.log( $mol_wire_sync( file ).text() )
				//console.log($mol_wire_sync(this.$).$mol_blob_text( next[0] ))
				// console.log($mol_fetch.success(URL.createObjectURL(file)).text())
				// this.map_json_url(url)
			}

			return next ?? []
		}

		@$mol_mem
		map_json_url( next?: string ) {
			return next
		}

		@$mol_mem
		loaded_file() {
			return this.map_files()[ 0 ]
		}

		@$mol_mem
		loaded_json() {
			const file = this.loaded_file() as File | undefined
			if( !file ) return undefined
			return $mol_wire_sync( $ ).$mol_blob_json( file )
		}

		@$mol_action
		async load_map_click( next?: any ) {
			const file = this.map_files()[ 0 ] as File
			console.log( file, this.map_files() )
			if( !file ) return
			const map_json = await $mol_blob_json( file )
			const main_ref = "7cPY6æ0E_4RpGD3TQ" // TODO
			const map_object = $apxu_samosbor_map_storage.current()
			console.log( map_object )
			if( !map_object ) return
			// await $apxu_samosbor_map_storage.load(main_ref, map_object, map_json)
		}

		@$mol_action
		save_map() {
			const map = $apxu_samosbor_map_storage.current()
			if( !map ) return
			const data = $apxu_samosbor_map_storage.save_map( map )
			const now = new Date()
			const dateStr = now.toISOString().split( 'T' )[ 0 ] // YYYY-MM-DD
			const fileName = `test_${ dateStr }.json`
			$apxu_samosbor_map_app.download_data( data, fileName )
		}

		@$mol_action
		load_map() {
			const map = ( $apxu_samosbor_map_storage ).current()
			if( !map ) return
			const { result, saved_block_nodes, saved_transition_nodes } = ( this ).loaded_json()
			$mol_wire_sync( $apxu_samosbor_map_storage ).load_map( map, result, saved_block_nodes, saved_transition_nodes )


		}
	}
}
