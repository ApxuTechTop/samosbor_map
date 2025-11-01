namespace $.$$ {
	export class $apxu_samosbor_map_block_floor extends $.$apxu_samosbor_map_block_floor {
		@$mol_mem
		block_name( next?: string ) {
			return this.block_data().name( next ) ?? ""
		}
		@$mol_mem
		has_interfloor() {
			const real_floor = this.current_floor()
			const bottom_passages = this.block_data().all_passages( real_floor - 1 )
			const top_passages = this.block_data().all_passages( real_floor + 1 )
			if( top_passages?.includes( "stairs_down" ) || bottom_passages?.includes( "stairs_up" ) ) {
				return true
			}
			return false
		}

		@$mol_mem_key
		passage_type( what: TransitionPosition ) {
			const floor = this.current_floor()
			return this.block_data().passage_type( [ floor, what ] )
		}

		@$mol_action
		passage_click( what: TransitionPosition, event: PointerEvent ) {
			console.log( what, event )
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const floor = this.current_floor()
			const current_passage_type = this.block_data().passage_type( [ floor, what ] )
			console.log( current_passage_type )
			const next_passage_type = $apxu_samosbor_map_block.next_passage_type( current_passage_type )
			this.block_data().passage_type( [ floor, what ], next_passage_type )
		}

		@$mol_mem
		pipe_name_visible(): readonly ( any )[] {
			return this.is_pipe() ? [ this.pipe_name() ] : []
		}

		@$mol_mem
		has_middle_flight( next?: boolean ): boolean {
			return this.block_data().IsMiddleFlight( next )?.val( next ) ?? false
		}

		@$mol_mem_key
		flight_icon(what: "left" | "right") {
			const flight_type = this.block_data().left_flight_type()
			if( !flight_type || this.has_middle_flight() ) {
				return
			}
			return this.flight_icons( what )[ flight_type ]
		}


		@$mol_mem
		up_left_angle_visible() {
			return this.is_pipe() ? this.up_left_angle_part() : this.left_flight()
		}
		@$mol_mem
		up_right_angle_visible() {
			return this.is_pipe() ? this.up_right_angle_part() : this.right_flight()
		}
		@$mol_mem
		down_left_angle_visible() {
			return this.is_pipe() ? this.down_left_angle_part() : this.floor_part()
		}
		@$mol_mem
		down_right_angle_visible() {
			return this.is_pipe() ? this.down_right_angle_part() : this.effects_part()
		}
		@$mol_mem
		up_left_part_visible() {
			return this.is_pipe() ? this.up_left_part_empty() : this.up_left_part()
		}
		@$mol_mem
		up_right_part_visible() {
			return this.is_pipe() ? this.up_right_part_empty() : this.up_right_part()
		}
		@$mol_mem
		down_left_part_visible() {
			return this.is_pipe() ? this.down_left_part_empty() : this.down_left_part()
		}
		@$mol_mem
		down_right_part_visible() {
			return this.is_pipe() ? this.down_right_part_empty() : this.down_right_part()
		}
	}
}
