namespace $.$$ {
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

	}
}
