namespace $.$$ {

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
				}
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
			this.search_item_click( this.search_results()[ id ] )
		}

	}
}
