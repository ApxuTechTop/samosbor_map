namespace $.$$ {
	export class $apxu_samosbor_map_block_card_touch extends $.$apxu_samosbor_map_block_card_touch {
		event_coords( event: PointerEvent | WheelEvent ) {
			return new $mol_vector_2d(
				Math.round( event.pageX ),
				Math.round( event.pageY ),
			)
		}
		event_move( event: PointerEvent ) {
			if( event.defaultPrevented ) return
			event.stopImmediatePropagation()

			const rect = this.view_rect()
			if( !rect ) return

			const start_pan = this.start_pan()

			const action_type = ( this as any ).event_eat( event )

			const start_pos = this.start_pos()
			let pos = this.pointer_center()!

			if( !action_type ) return
			if( !start_pos ) return

			if( action_type === 'draw' ) {

				const distance = new $mol_vector( start_pos, pos ).distance()
				if( distance >= 4 ) {
					this.draw( event )
				}
				return
			}

			if( action_type === 'pan' ) {

				this.dom_node().setPointerCapture( event.pointerId )
				this.pan(
					new $mol_vector_2d(
						start_pan[ 0 ] + pos[ 0 ] - start_pos[ 0 ],
						start_pan[ 1 ] + pos[ 1 ] - start_pos[ 1 ],
					)
				)

			}

			const precision = this.swipe_precision()

			if(
				(
					this.swipe_right !== $mol_touch.prototype.swipe_right
					|| this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
					|| this.swipe_to_right !== $mol_touch.prototype.swipe_to_right
				)
				&& pos[ 0 ] - start_pos[ 0 ] > precision * 2
				&& Math.abs( pos[ 1 ] - start_pos[ 1 ] ) < precision
			) {
				this.swipe_right( event )
			}

			if(
				(
					this.swipe_left !== $mol_touch.prototype.swipe_left
					|| this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
					|| this.swipe_to_left !== $mol_touch.prototype.swipe_to_left
				)
				&& start_pos[ 0 ] - pos[ 0 ] > precision * 2
				&& Math.abs( pos[ 1 ] - start_pos[ 1 ] ) < precision
			) {
				this.swipe_left( event )
			}

			if(
				(
					this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
					|| this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
					|| this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom
				)
				&& pos[ 1 ] - start_pos[ 1 ] > precision * 2
				&& Math.abs( pos[ 0 ] - start_pos[ 0 ] ) < precision
			) {
				this.swipe_bottom( event )
			}

			if(
				(
					this.swipe_top !== $mol_touch.prototype.swipe_top
					|| this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
					|| this.swipe_to_top !== $mol_touch.prototype.swipe_to_top
				)
				&& start_pos[ 1 ] - pos[ 1 ] > precision * 2
				&& Math.abs( pos[ 0 ] - start_pos[ 0 ] ) < precision
			) {
				this.swipe_top( event )
			}

			if( action_type === 'zoom' ) {

				const coords = ( this as any ).pointer_coords()
				const distance = coords.distance()
				const start_distance = this.start_distance()
				const center = coords.center()

				const start_zoom = this.start_zoom()
				let mult = Math.abs( distance - start_distance ) < 32 ? 1 : distance / start_distance
				this.zoom( start_zoom * mult )

				const pan = new $mol_vector_2d(
					( start_pan[ 0 ] - center[ 0 ] + pos[ 0 ] - start_pos[ 0 ] ) * mult + center[ 0 ],
					( start_pan[ 1 ] - center[ 1 ] + pos[ 1 ] - start_pos[ 1 ] ) * mult + center[ 1 ],
				)

				this.pan( pan )

			}

		}
	}
	export class $apxu_samosbor_map_block_card_place extends $.$apxu_samosbor_map_block_card_place {
		@$mol_mem
		floors_list(): readonly ( any )[] {
			const floors_data: readonly ProfessionData[] = this.floors()
			return floors_data.toSorted( ( a, b ) => {
				return Number( b.Floor( null )?.val() ) - Number( a.Floor( null )?.val() )
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
	const flight_type_map: {
		[ key in typeof FlightType.options[ number ] ]: typeof FlightType.options[ number ]
	} = {
		stairs: "elevator",
		elevator: "ladder_elevator",
		ladder_elevator: "stairs"
	}
	export class $apxu_samosbor_map_block_card extends $.$apxu_samosbor_map_block_card {
		@$mol_action
		delete_block( next?: any ) {
			const data = this.block().block_data()
			this.gigacluster().delete_block( data.ref() )
		}

		@$mol_mem
		edit_button_visible() {
			return this.is_editor() ? [ this.edit_button() ] : []
		}
		@$mol_mem
		delete_button_visible() {
			return this.is_editor() ? [ this.delete_button() ] : []
		}

		@$mol_mem
		block_land() {
			return this.block().block_data().land()
		}

		@$mol_mem
		rights_visible(): readonly ( any )[] {
			const is_admin = this.is_admin()
			if( is_admin ) return [ this.rights() ]
			return []
		}

		@$mol_mem
		position_style(): string {
			const pan = this.pan().map( ( v ) => Math.round( v ) )
			const str = `${ pan[ 0 ] }px ${ pan[ 1 ] }px`
			return str
		}
		@$mol_mem
		left_flight_icons(): readonly ( any )[] {
			const flight_type = this.block().block_data().left_flight_type()
			const flight_icon_map: { [ flight_type in typeof flight_type ]: $mol_icon[] } = {
				"elevator": [ this.flight_icons( "left" )[ "elevator" ] ],
				"ladder_elevator": [ this.flight_icons( "left" )[ "elevator" ], this.flight_icons( "left" )[ "ladder_icon" ] ],
				"stairs": [ this.flight_icons( "left" )[ "stairs" ] ]
			}
			return flight_icon_map[ flight_type ]
		}
		@$mol_action
		left_flight_click() {
			if( !this.edit_mode() ) return
			const current_flight_type = this.block().block_data().left_flight_type()
			const next_flight_type = flight_type_map[ current_flight_type ]
			this.block().block_data().left_flight_type( next_flight_type )
		}
		@$mol_mem
		right_flight_icons(): readonly ( any )[] {
			const flight_type = this.block().block_data().right_flight_type()
			const flight_icon_map: { [ flight_type in typeof flight_type ]: $mol_icon[] } = {
				"elevator": [ this.flight_icons( "right" )[ "elevator" ] ],
				"ladder_elevator": [ this.flight_icons( "right" )[ "elevator" ], this.flight_icons( "right" )[ "ladder_icon" ] ],
				"stairs": [ this.flight_icons( "right" )[ "stairs" ] ]
			}
			return flight_icon_map[ flight_type ]
		}
		@$mol_mem
		middle_flight_icons(): readonly ( any )[] {
			const flight_type = this.block().block_data().middle_flight_type()
			const flight_icon_map: { [ flight_type in typeof flight_type ]: $mol_icon[] } = {
				"elevator": [ this.flight_icons( "middle" )[ "elevator" ] ],
				"ladder_elevator": [ this.flight_icons( "middle" )[ "elevator" ], this.flight_icons( "middle" )[ "ladder_icon" ] ],
				"stairs": [ this.flight_icons( "middle" )[ "stairs" ] ]
			}
			return flight_icon_map[ flight_type ]
		}
		@$mol_action
		right_flight_click() {
			if( !this.edit_mode() ) return
			const current_flight_type = this.block().block_data().right_flight_type()
			const next_flight_type = flight_type_map[ current_flight_type ]
			this.block().block_data().right_flight_type( next_flight_type )
		}
		@$mol_action
		middle_flight_click() {
			if( !this.edit_mode() ) return
			const current_flight_type = this.block().block_data().middle_flight_type()
			const next_flight_type = flight_type_map[ current_flight_type ]
			this.block().block_data().middle_flight_type( next_flight_type )
		}
		@$mol_mem
		is_middle_flight( next?: boolean ): boolean {
			return this.block().is_up_flight( next )
		}
		@$mol_action
		change_flight_click() {
			if( !this.edit_mode() ) return
			this.block().is_up_flight( !this.block().is_up_flight() )
		}
		@$mol_mem
		current_flight(): readonly ( any )[] {
			const side_flights = [ this.left_flight_view(), this.right_flight_view() ]
			return this.block().is_up_flight() ? [ this.middle_flight_view() ] : side_flights
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
			return safe_floors
		}
		@$mol_mem_key
		place_floors( what: string ) {
			return this.block().place_floors( what )
		}
		@$mol_action
		add_place( what: typeof PlaceType.options[ number ], event?: any ) {
			const data: $apxu_samosbor_map_block_data = this.block().block_data()
			const node = data.Places( null )?.make( null ) // TODO права
			node?.Type( null )?.val( what )
			return node
		}
		@$mol_action
		remove_place( node: PlaceData ) {
			const data: $apxu_samosbor_map_block_data = this.block().block_data()
			data.remove_place( node.ref() )
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

		place_icon( id: typeof PlaceType.options[ number ] ) {
			const icons = this.place_icons()
			return icons[ id ]
		}

		@$mol_mem
		block_type_value( next?: typeof BlockType.options[ number ] ): string {
			return this.block().block_data().block_type( next )
		}

		@$mol_mem
		other_places() {
			const places: $mol_view[] = []
			const other_place_types = [ "laundry", "shower", "toilet", "postal", "gym",
				"overview", "racing", "hockey",
				"spleef", "pool", "warehouse" ]

			for( const place_type of other_place_types ) {
				const some_place = this.place_floor( place_type )
				places.push( some_place )
			}

			return places
		}
	}
}
