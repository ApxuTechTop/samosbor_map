namespace $.$$ {

	export class $apxu_samosbor_map_area extends $.$apxu_samosbor_map_area {
		constructor() {
			super()
			this.log()
		}

		@$mol_mem
		position( next = [ 0, 0 ] ) {
			return next
		}
		@$mol_mem
		pos_x( next?: string ): string {
			return this.position()[0] + "px"
		}
		@$mol_mem
		pos_y( next?: string ): string {
			return this.position()[1] + "px"
		}
		@$mol_mem
		position_style(): string {
			return `${this.pos_x()} ${this.pos_y()}`
		}
		@$mol_mem
		transform_style(): string {
			const transform = `${this.position_style()} ${this.scale_style()}`
			return transform
		}

		@$mol_mem
		size( next = [
			// @ts-ignore
			this.dom_node_actual().offsetWidth,
			// @ts-ignore
			this.dom_node_actual().offsetHeight,
		] ) {
			return next
		}

		@$mol_mem
		isDragging( next = false ) {
			return next
		}

		@$mol_mem
		dragStartPos( next = [ 0, 0 ] ) {
			return next
		}

		@$mol_mem
		center() {
			return [
				this.size()[ 0 ] / 2,
				this.size()[ 1 ] / 2
			]
		}

		@$mol_mem
		zoom( next = 1 ) {
			return next
		}

		@$mol_mem
		zoomLimits( next = [ 0.1, 6 ] ) {
			return next
		}

		@$mol_mem
		scale_style(): string {
			return `${this.zoom()}`
		}
		/**
		 * 
		 * @param new_zoom новое значение для zoom
		 * @param offset точка в координатах области масштабирования
		 */
		@$mol_action
		zoom_at(new_zoom: number, offset: {x: number, y: number} = {x: this.position()[0], y: this.position()[1]}) {
			const current_zoom = this.zoom();
			const zoom_delta = new_zoom - current_zoom;
			
			const [area_pos_x, area_pos_y] = this.position();
			
			// Правильное преобразование: (мышь - смещение) / масштаб
			const plane_x = (offset.x - area_pos_x)  / current_zoom;
			const plane_y = (offset.y - area_pos_y ) / current_zoom;
			
			// Корректировка смещения для сохранения точки под курсором:
			const dx = plane_x * zoom_delta;
			const dy = plane_y * zoom_delta;
			
			this.zoom(new_zoom);
			this.position([area_pos_x - dx, area_pos_y - dy]);
			
		}

		@$mol_action
		zoomIn(cursor_x: number, cursor_y: number) {
			const [ min, max ] = this.zoomLimits()
			const currentZoom = this.zoom()
			const newZoom = Math.min( max, currentZoom * 1.2 )
			this.zoom_at(newZoom, {x: cursor_x, y: cursor_y})
		}

		@$mol_action
		zoomOut(cursor_x: number, cursor_y: number) {
			const [ min, max ] = this.zoomLimits()
			const currentZoom = this.zoom()
			const newZoom = Math.max( min, currentZoom / 1.2 )
			this.zoom_at(newZoom, {x: cursor_x, y: cursor_y})
		}

		

		@$mol_action
		reset() {
			this.position( [ 0, 0 ] )
			this.zoom( 1 )
		}

		// @ $mol_mem
		// styleForZoomComponent(): { [key: string]: string | number; } {
		// 	const pos = this.position()
		// 	const center = this.center()

		// 	return {
		// 		...this.style(),
		// 		left: (center[0] + pos[0] * this.zoom()) + 'px',
		// 		top: (center[1] + pos[1] * this.zoom()) + 'px',
		// 		transform: `scale(${this.zoom()})`,
		// 	}
		// }

		@$mol_action
		event_wheel( event: WheelEvent ) {
			if( event.defaultPrevented ) return

			console.log( event )

			const zoom_position_x = event.offsetX
			const zoom_position_y = event.offsetY;


			if( event.deltaY >= 0 ) {
				this.zoomOut(event.pageX, event.pageY)
			} else {
				this.zoomIn(event.pageX, event.pageY)
			}
		}

		// @ $mol_action
		// event_key( event: KeyboardEvent ) {
		// 	// if( event.defaultPrevented ) return

		// 	console.log(event)
		// 	if( event.key === 'a' ) {
		// 		this.position( [ this.position()[0] - 20, this.position()[1] ] )
		// 	}
		// 	if( event.key === 'd' ) {
		// 		this.position( [ this.position()[0] + 20, this.position()[1] ] )
		// 	}
		// 	if( event.key === 'w' ) {
		// 		this.position( [ this.position()[0], this.position()[1] - 20 ] )
		// 	}
		// 	if( event.key === 's' ) {
		// 		this.position( [ this.position()[0], this.position()[1] + 20 ] )
		// 	}
		// }

		@$mol_action
		event_mouse_down( event: MouseEvent ) {
			console.log( event )
			
			if( event.button === 1 ) {
				this.isDragging( true )
				this.dragStartPos( [ event.clientX, event.clientY ] )
				event.stopPropagation();
				event.preventDefault()
			}
		}

		@$mol_action
		event_mouse_move( event: MouseEvent ) {
			if( !this.isDragging() ) return

			//const movement = [event.movementX, event.movementY]


			const currentPos = this.position()

			this.position( [
				currentPos[ 0 ] + event.movementX,
				currentPos[ 1 ] + event.movementY
			] )

			// this.dragStartPos([currentX, currentY])
			event.preventDefault()
		}

		@$mol_action
		event_mouse_up( event: MouseEvent ) {
			if( event.button === 1 ) {
				this.isDragging( false )
				event.preventDefault()
			}
		}

		@$mol_mem
		log() {
			console.log( this.zoom() )
			console.log( this.isDragging() )
		}
	}
}
