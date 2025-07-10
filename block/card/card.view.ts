namespace $.$$ {
	export class $apxu_samosbor_map_block_card_place extends $.$apxu_samosbor_map_block_card_place {
		@$mol_mem
		floors_list(): readonly ( any )[] {
			const floors_data: readonly ProfessionData[] = this.floors()
			return floors_data.toSorted( ( a, b ) => {
				return Number( a.Floor( null )?.val() ) - Number( b.Floor( null )?.val() )
			} ).map( ( profession_node: ProfessionData, i ) => {
				return this.floor_input( profession_node )
			} )
		}
		@$mol_mem_key
		floor_value( node: ProfessionData, next?: number ): number {
			if( next !== null && next !== undefined && isNaN( next ) ) {
				return this.remove_floor( node )
			}
			const val = Number( node.Floor( null )?.val( next ? BigInt( next ) : undefined ) )
			return val
		}
	}

	export class $apxu_samosbor_map_block_card extends $.$apxu_samosbor_map_block_card {
		left_flight_icons(): readonly ( any )[] {
			return [ this.flight_icons( "left" )[ "elevator" ] ]
		}
		right_flight_icons(): readonly ( any )[] {
			return [ this.flight_icons( "right" )[ "stairs" ] ]
		}
		current_flight(): readonly ( any )[] {
			const side_flights = [ this.left_flight_view(), this.right_flight_view() ]
			return this.is_middle_flight() ? [ this.middle_flight_view ] : side_flights
		}
		@$mol_mem_key
		profession_floors( what: string ) {
			return this.block().profession_floors( what )
		}
		@$mol_action
		add_profession( what: typeof ProfessionType.options[ number ], event?: any ) {
			const data: $apxu_samosbor_map_block_data = this.block().block_data()
			const node = data.Professions( null )?.make( null )
			node?.Type( null )?.val( what )
			// node?.Floor(null)?.val(BigInt(0))
		}
		@$mol_mem_key
		remove_floor( node: ProfessionData ) {
			const data: $apxu_samosbor_map_block_data = this.block().block_data()
			data.remove_profession( node.ref() )
		}
		@$mol_mem
		safe_floors() {
			const safe_floors = this.block().safe_floors()
			console.log( safe_floors )
			return safe_floors
		}
		@$mol_mem
		rotation(): string {
			const degree = 0
			const degree_map: { [ dir in DirectionType ]: number } = {
				up: 0,
				right: 90,
				down: 180,
				left: 270,
			}
			return `rotate(${ degree_map[ this.block().block_direction() as DirectionType ] }deg)`
		}

		@$mol_action
		rotate_click( event: any ) {
			const prev_direction = this.block().block_direction() as DirectionType
			const new_direction = $apxu_samosbor_map_app.next_direction( prev_direction )
			this.block().block_direction( new_direction )
		}

		@$mol_action
		move_click( dir: DirectionType, event?: any ) {
			console.log( dir, event )
			const pos_map: { [ dir in DirectionType ]: { x: number, y: number } } = {
				up: { x: 0, y: -1 },
				right: { x: 1, y: 0 },
				down: { x: 0, y: 1 },
				left: { x: -1, y: 0 },
			}
			const diff_pos = pos_map[ dir ]
			this.block().pos_x( this.block().pos_x() + diff_pos.x )
			this.block().pos_y( this.block().pos_y() + diff_pos.y )
		}

		@$mol_mem
		current_type_select_icon() {
			return this.edit_mode() ? this.type_select_icon() : null
		}

		@$mol_mem
		gen_floor( next?: number ): number {
			if( next === null ) {
				return this.block().generator_floor_value()
			}
			return this.block().generator_floor_value( next )
		}

		@$mol_mem_key
		floor_value( what: keyof ReturnType<typeof this.some_floor>, next?: number ) {
			const value = this.some_floor()[ what ].value( next )
			if( value === null ) return NaN
			return value
		}

		floor_icon( what: keyof ReturnType<typeof this.some_floor> ): $mol_icon {
			return this.some_floor()[ what ].icon
		}

		floor_view( what: any ) {
			const visible = this.edit_mode() || !isNaN( this.floor_value( what ) )
			return visible ? this.floor_simple( what ) : null
		}

		@$mol_mem
		balcony_view() {
			const visible = this.edit_mode() || this.has_balcony()
			return [ visible ? this.balcony_checkbox() : null ]
		}
	}
}
