namespace $.$$ {

	export class $apxu_samosbor_map_slider extends $.$apxu_samosbor_map_slider {
		@$mol_mem
		slot_count() {
			return ( this.max_value() - this.min_value() ) + 1
		}

		@$mol_mem
		slot_size() {
			const dom = this.dom_node_actual() as HTMLDivElement
			return ( dom.offsetHeight - 24 ) / ( this.slot_count() - 1 )
		}
		@$mol_mem
		thumb_top(): number {
			return ( this.max_value() - this.value_limited() ) * this.slot_size()
		}

		@$mol_mem
		value_limited( next: number = this.value() ): number {
			if( next < this.min_value() ) {
				return this.value( this.min_value() )
			}
			if( next > this.max_value() ) {
				return this.value( this.max_value() )
			}
			return this.value( next )
		}

		@$mol_mem
		all_slots(): readonly ( $mol_view )[] {
			const slots: $mol_view[] = []
			for( let i = 0; i < this.slot_count(); ++i ) {
				const slot = this.Slot( i )
				slots.push( slot )
			}
			return slots
		}


		first_value = 0
		@$mol_mem
		drag_start( event?: PointerEvent ) {
			console.log( "drag start" )
			this.first_value = this.value()
		}
		delta_y( next?: number ): number {
			if( next ) {
				const new_absolute_value = this.first_value - next / this.slot_size()
				this.value( Math.round( new_absolute_value ) )
			}
			return next ?? 0
		}
	}
}
