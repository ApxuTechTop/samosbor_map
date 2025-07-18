namespace $.$$ {

	export class $apxu_samosbor_map_slider_input extends $.$apxu_samosbor_map_slider_input {

		@$mol_mem
		delta_x( val?: number ): number {
			return val ?? 0
		}
		@$mol_mem
		delta_y( val?: number ): number {
			return val ?? 0
		}

		start_event?: PointerEvent
		start_pos?: { x: number, y: number }

		@$mol_action
		drag_start( event: PointerEvent ) {
			this.start_event = event
			this.start_pos = { x: this.x(), y: this.y() }
			event.stopImmediatePropagation()
			event.preventDefault()
			this.dom_node().setPointerCapture( event.pointerId )
			this.moving( true )
			this.on_drag_start( event )
		}

		@$mol_action
		drag( event: PointerEvent ) {
			event.stopImmediatePropagation()
			event.preventDefault()
			this.x( this.start_pos!.x + this.delta_x( event.x - this.start_event!.x ) )
			this.y( this.start_pos!.y + this.delta_y( event.y - this.start_event!.y ) )
			this.on_drag( event )
		}

		@$mol_action
		drag_end( event: PointerEvent ) {

			this.moving( false )
			this.on_drag_end( event )
			this.dom_node().releasePointerCapture( event.pointerId )
		}

		pointerdown( event: PointerEvent ) {

			this.drag_start( event )

			const mousemove = new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'pointermove',
				$mol_wire_async( event => {
					this.drag( event )
				} ),
			)

			const mouseup = new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'pointerup',
				$mol_wire_async( event => {
					this.drag_end( event )
					mouseup?.destructor()
					mousemove?.destructor()
				} ),
			)

		}

	}

}
