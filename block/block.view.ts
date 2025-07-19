namespace $.$$ {


	export const block_full_cell = 380
	export const ru_to_eng: { [ ru: string ]: string } = {
		"А": "a",
		"Б": "b",
		"В": "v",
		"Г": "g",
		"Д": "d",
		"Е": "e",
		"Ж": "j",
		"З": "z",
		"И": "i",
		"К": "k",
		"Л": "l",
		"М": "m",
		"Н": "n",
		"О": "o",
		"П": "p",
		"Р": "r",
		"С": "s",
		"Т": "t",
		"У": "u",
		"Ф": "f",
		"Х": "h",
		"Ц": "c",
		"Ч": "ch",
		"Ш": "sh",
		"Щ": "shch",
		"Ы": "y",
		"Ю": "yu",
		"Э": "je",
		"Я": "ya",
	}
	export class $apxu_samosbor_map_block_passage extends $.$apxu_samosbor_map_block_passage {
		floor_inc_value(): string {
			if( this.type() === "stairs_up" ) {
				return "+1"
			}
			if( this.type() === "stairs_down" ) {
				return "-1"
			}
			return "0"
		}
		@$mol_mem
		is_interfloor() {
			return this.type() === "stairs_up" || this.type() === "stairs_down"
		}
		content() {
			return this.is_interfloor() ? this.InterFloor() : null
		}
	}
	export class $apxu_samosbor_map_block extends $.$apxu_samosbor_map_block {
		// @$mol_mem
		// block_name(next?: string) {
		// 	return next ?? "qwe"
		// }
		// @$mol_mem_key
		// block_link( block_name: string, next?: Block ): Block {
		// 	return $apxu_samosbor_map_app.block(block_name, next)
		// }
		@$mol_mem
		block_ref( next?: $apxu_samosbor_map_block_data ) {
			return next!
		}
		@$mol_mem
		block_data( next?: $apxu_samosbor_map_block_data ): $apxu_samosbor_map_block_data {
			return next!
		}
		@$mol_mem
		block_direction( next?: DirectionType ): DirectionType {
			return this.block_data().direction( next )
		}
		@$mol_mem
		pos_x( next?: number ) {
			return this.block_data().pos_x( next ) ?? 0
		}
		@$mol_mem
		pos_y( next?: number ) {
			return this.block_data().pos_y( next ) ?? 0
		}
		@$mol_mem
		left() {
			return this.pos_x() * block_full_cell
		}
		@$mol_mem
		top() {
			return this.pos_y() * block_full_cell
		}
		@$mol_mem
		block_name( next?: string ) {
			return this.block_data().name( next ) ?? ""
		}
		@$mol_mem
		current_floor(): number {
			return Math.max( this.min_floor(), Math.min( this.current_layer() - this.block_layer(), this.max_floor() ) ) // TODO поправить для межэтажных
		}
		@$mol_mem
		display_floor(): string {
			return ( this.current_floor() <= this.max_floor() && this.current_floor() >= this.min_floor() ) ? `${ this.current_floor() }` : "?"
		}
		@$mol_mem
		generator_floor_value( next?: number ) {
			return this.block_data().generator_floor( next )
		}
		@$mol_mem
		board_floor_value( next?: number ): number | null {
			const value = this.block_data().board_floor( next )
			if( value === null ) return value
			return Number( value )
		}
		@$mol_mem
		mail_floor_value( next?: number ): number | null {
			const value = this.block_data().mail_floor( next )
			if( value === null ) return value
			return Number( value )
		}
		@$mol_mem
		roof_floor_value( next?: number ): number | null {
			const value = this.block_data().roof_floor( next )
			if( value === null ) return value
			return Number( value )
		}
		@$mol_mem
		flood_floor_value( next?: number ): number | null {
			const value = this.block_data().flood_floor( next )
			if( value === null ) return value
			return Number( value )
		}
		@$mol_mem_key
		profession_floors( what: typeof ProfessionType.options[ number ] ) {
			return this.block_data().profession_floors( what )
		}
		@$mol_mem
		safe_floors() {
			return this.block_data().safe_floors()
		}
		@$mol_mem_key
		place_floors( what: typeof PlaceType.options[ number ] ) {
			return this.block_data().place_floors( what )
		}
		@$mol_mem
		block_layer( next?: number ): number {
			return this.block_data().layer( next )
		}
		@$mol_mem
		min_floor( next?: number ): number {
			return this.block_data().min_floor( next )
		}
		@$mol_mem
		max_floor( next?: number ): number {
			return this.block_data().max_floor( next )
		}
		@$mol_mem
		visible(): boolean {
			const real_floor = this.current_layer() - this.block_layer()
			return ( this.min_floor() <= real_floor ) && ( real_floor <= this.max_floor() )
		}
		@$mol_mem
		has_interfloor() {
			const real_floor = this.current_layer() - this.block_layer()
			const bottom_passages = this.block_data().all_passages( real_floor - 1 )
			const top_passages = this.block_data().all_passages( real_floor + 1 )
			if( top_passages?.includes( "stairs_down" ) || bottom_passages?.includes( "stairs_up" ) ) {
				return true
			}
			return false
		}
		@$mol_mem
		color_letter(): string {
			const block_letter = this.block_name()[ 0 ]
			return ru_to_eng[ block_letter ]
		}

		@$mol_mem
		block_type( next?: typeof BlockType.options[ number ] ): typeof BlockType.options[ number ] {
			return this.block_data().block_type( next )
		}

		@$mol_mem
		transitions() {
			const transition_views: $mol_view[] = []

			for( const transition of this.block_data().transitions() ?? [] ) {
				const from_block_ref = transition.From( null )?.Block( null )?.val()
				if( !from_block_ref ) continue
				const block_data = $hyoo_crus_glob.Node( from_block_ref, $apxu_samosbor_map_block_data )
				if( this.block_data() === block_data ) {
					transition_views.push( this.Transition( transition.ref() ) )
				}
			}

			return transition_views
		}

		@$mol_mem_key
		transition_pos( position: TransitionPosition ) {
			const padding = 0
			const adjustments: Record<"up" | "down" | "left" | "right", { x: number; y: number }> = {
				up: { x: 0, y: padding },
				down: { x: 0, y: -padding },
				left: { x: padding, y: 0 },
				right: { x: -padding, y: 0 },
			}
			const transition_offset = $apxu_samosbor_map_app.getOffset( position, this.block_direction() )
			const abs_dir = $apxu_samosbor_map_app.absolute_direction( this.block_direction(), position )
			const adjustment = adjustments[ abs_dir ] ?? { x: 0, y: 0 }
			const adjusted_offset = {
				x: transition_offset.x - 50,
				y: transition_offset.y - 50
			}
			return adjusted_offset
		}

		@$mol_mem_key
		transition_direction( ref: any ): string {
			const node = $hyoo_crus_glob.Node( ref, TransitionData )
			const block_ref = node.From( null )?.Block( null )?.val()
			const block = this.block_data()
			const absolute_direction = $apxu_samosbor_map_app.absolute_direction( block.direction(), node.From( null )?.Position( null )?.val()! )
			if( absolute_direction === "down" || absolute_direction === "up" ) {
				return "horizontal"
			} else {
				return "vertical"
			}
		}

		@$mol_mem_key
		transition_hidden( ref: any ): boolean {
			const node = $hyoo_crus_glob.Node( ref, TransitionData )
			const transition_floor = Number( node.From( null )?.Floor( null )?.val() )
			const current_floor = this.current_floor()
			this.block_data().FloorsData( null )
			return transition_floor !== current_floor
		}

		@$mol_mem_key
		transition_left( ref: any ): number {
			const transition = $hyoo_crus_glob.Node( ref, TransitionData )
			const position = transition.From( null )?.Position( null )?.val()
			if( !position ) return 0
			return this.transition_pos( position ).x
		}
		@$mol_mem_key
		transition_top( ref: any ): number {
			const transition = $hyoo_crus_glob.Node( ref, TransitionData )
			const position = transition.From( null )?.Position( null )?.val()
			if( !position ) return 0
			return this.transition_pos( position ).y
		}

		@$mol_mem
		connections(): readonly ( any )[] {
			if( !this.show_connections() ) {
				return []
			}
			const connections: $mol_view[] = []
			for( const position of TransitionPositions ) {
				const connection = this.Connection( position )
				connections.push( connection )
			}
			return connections
		}
		@$mol_mem_key
		connection_hidden( position: TransitionPosition ) {
			if( this.create_mode() || this.connect_mode() ) {
				const floor = this.current_floor()
				const is_passage_free = this.block_data().FloorsData( null )?.key( floor, null )?.is_passage_free( position )
				return !( is_passage_free ?? false )
			}
			// if (this.connect_mode()) {
			// 	const finded_transition = this.block_data().transition_by_position(this.current_floor(), position)
			// 	return !finded_transition
			// }
			return true
		}

		@$mol_mem_key
		connection_pos( position: TransitionPosition ) {
			const padding = 30
			const adjustments: Record<"up" | "down" | "left" | "right", { x: number; y: number }> = {
				up: { x: 0, y: padding },
				down: { x: 0, y: -padding },
				left: { x: padding, y: 0 },
				right: { x: -padding, y: 0 },
			}
			const connectionOffset = $apxu_samosbor_map_app.getOffset( position, this.block_direction() )
			const abs_dir = $apxu_samosbor_map_app.absolute_direction( this.block_direction(), position )
			const adjustment = adjustments[ abs_dir ] ?? { x: 0, y: 0 }
			const adjustedOffset = {
				x: connectionOffset.x + adjustment.x,
				y: connectionOffset.y + adjustment.y
			}
			return adjustedOffset
		}
		@$mol_mem_key
		connection_left( position: TransitionPosition ) {
			return this.connection_pos( position ).x
		}
		@$mol_mem_key
		connection_top( position: TransitionPosition ) {
			return this.connection_pos( position ).y
		}

		@$mol_action
		connection_click( position: TransitionPosition, event?: PointerEvent ) {
			console.log( event )
			event?.stopImmediatePropagation()
			event?.stopPropagation()

			if( this.create_mode() ) {
				return this.create_from_connection( position, event )
			}
			if( this.connect_mode() ) {
				console.log( "select" )
				this.select_connection( position )
			}
		}

		@$mol_mem
		static first_port( port?: { block_ref: any, floor: number, position: TransitionPosition } | null ) {
			return port ?? undefined
		}

		@$mol_action
		select_connection( position: TransitionPosition ) {
			const first_port = $apxu_samosbor_map_block.first_port()
			const is_same_port = ( port: { block_ref: any, floor: number, position: TransitionPosition } ) => {
				return port.block_ref.description == this.block_data().ref().description && port.floor == this.current_floor() && port.position == position
			}
			// если кликнули по тому же соединению, убрать first_port
			if( first_port && is_same_port( first_port ) ) {
				$apxu_samosbor_map_block.first_port( null )
				return
			}
			// если кликнули по тому же блоку, то ничего не делаем
			if( this.block_data().ref() === first_port?.block_ref ) return

			// если нет first_port добавить в first_port
			if( !first_port ) {
				$apxu_samosbor_map_block.first_port( { block_ref: this.block_data().ref(), floor: this.current_floor(), position: position } )
				return
			}

			// создать соединение или удалить
			this.change_connection( position )
		}

		@$mol_action
		change_connection( position: TransitionPosition ) {
			const first_port = $apxu_samosbor_map_block.first_port()
			console.log( "first port: ", first_port )
			if( !first_port ) return

			const first_block = $hyoo_crus_glob.Node( first_port.block_ref, $apxu_samosbor_map_block_data )
			const transition = this.block_data().transition_by_position( this.current_floor(), position )


			if( transition ) {
				if( first_block.transition_by_position( first_port.floor, first_port.position ) !== transition ) {
					return
				}
				// удалить соединение
				console.log( transition.From( null )?.Block( null )?.val(), transition.To( null )?.Block( null )?.val(), transition.From( null )?.Position( null )?.val(), transition.To( null )?.Position( null )?.val() )
				transition.remove_transition()
			} else {
				// соединить блоки
				const another_block = $hyoo_crus_glob.Node( first_port.block_ref, $apxu_samosbor_map_block_data )
				const another_floor = first_port.floor
				const another_position = first_port.position
				this.block_data().connect( this.current_floor(), position, another_block, another_floor, another_position )
			}
			$apxu_samosbor_map_block.first_port( null )
		}

		@$mol_mem_key
		connection_highlight( position: TransitionPosition ) {
			const first_port = $apxu_samosbor_map_block.first_port()
			if( !first_port ) { return false }
			const current_block = this.block_data().ref()
			const current_floor = this.current_floor()
			const current_position = position
			const is_same_port = ( { block_ref, floor, position }: Exclude<typeof first_port, undefined> ) => {
				if( current_block === block_ref &&
					current_floor === floor &&
					current_position === position
				) {
					return true
				}
			}
			if( is_same_port( first_port ) ) {
				console.log( "pressed myself" )
				return true
			}

			const first_block = $hyoo_crus_glob.Node( first_port.block_ref, $apxu_samosbor_map_block_data )
			// выделяем если нашли transition
			const transition = first_block.transition_by_position( first_port.floor, first_port.position )

			const current_port = ( transition?.From( null )?.Block( null )?.val() === first_block.ref() ) ? transition.To( null ) : transition?.From( null )
			if( !current_port ) {
				return false
			}
			const second_port = {
				block_ref: current_port.Block( null )?.val()!,
				floor: Number( current_port.Floor( null )?.val()! ),
				position: current_port.Position( null )?.val()!,
			}
			if( is_same_port( second_port ) ) {
				return true
			}
			// if (current_port.Block(null)?.val() === current_block &&
			// 	current_port.Floor(null)?.val() === BigInt(current_floor) &&
			// 	current_port.Position(null)?.val() === current_position
			// ) {
			// 	return true
			// }

			return false
		}

		@$mol_action
		create_from_connection( position: TransitionPosition, event?: PointerEvent ) {

			event?.stopPropagation()

			const new_block_name = `N-${ Math.floor( Math.random() * 100 ) }`
			const block_name = this.block_name()
			const floor_num = this.current_floor()
			console.log( this, this.gigacluster(), this.block_data() )
			const trans = this.gigacluster().transition( this.block_data(), floor_num, position )
			console.log( trans )
			if( this.connect_mode() ) {
				this.on_connection_select( position )
			}
			if( trans ) {
				// повернуть блок
				return
			}
			if( this.connect_mode() ) return
			const offset = $apxu_samosbor_map_app.getPositionOffset( position, this.block_direction() )
			const new_block_direction = $apxu_samosbor_map_app.next_direction(
				$apxu_samosbor_map_app.next_direction(
					$apxu_samosbor_map_app.absolute_direction(
						this.block_direction(), position ) ) )

			const new_offset = $apxu_samosbor_map_app.getPositionOffset( "up_left", new_block_direction )

			console.log( offset )
			const pos_x = Math.round( ( this.pos_x() + offset.x - new_offset.x ) )
			const pos_y = Math.round( ( this.pos_y() + offset.y - new_offset.y ) )
			const new_block_node = this.gigacluster().create_block()
			console.log( new_block_node )
			if( !new_block_node ) return
			// new_block_node.up_left_passage_type( 0, "normal" )
			// this.block_data().connect( this.current_floor(), position, new_block_node, 0, "up_left" )
			new_block_node.name( new_block_name )
			new_block_node.direction( new_block_direction )
			new_block_node.pos_x( pos_x )
			new_block_node.pos_y( pos_y )
			new_block_node.layer( this.current_layer() )
			return event
		}

		@$mol_mem
		has_middle_flight() {
			return this.is_up_flight()
		}

		@$mol_mem
		left_flight_icon() {
			const flight_type = this.block_data().left_flight_type()
			if( !flight_type || this.has_middle_flight() ) {
				return
			}
			return this.flight_icons( "left" )[ flight_type ]
		}

		@$mol_action
		left_flight_click( event?: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const current_floor = this.current_floor()
			this.block_data().next_flight_status( current_floor, "left" )
		}

		@$mol_mem_key
		flight_status( what: "left" | "right" ) {
			const current_floor = this.current_floor()
			return this.block_data().flight_status( { floor: current_floor, what } )
		}

		@$mol_mem
		right_flight_icon() {
			const flight_type = this.block_data().right_flight_type()
			if( !flight_type || this.has_middle_flight() ) {
				return
			}
			return this.flight_icons( "right" )[ flight_type ]
		}
		@$mol_mem
		middle_flight_icons(): readonly ( any )[] {
			const flight_type = this.block_data().middle_flight_type()
			const flight_icon_map: { [ flight_type in typeof flight_type ]: $mol_icon[] } = {
				"elevator": [ this.flight_icons( "middle" )[ "elevator" ] ],
				"ladder_elevator": [ this.flight_icons( "middle" )[ "elevator" ], this.ladder_icon( "middle" ) ],
				"stairs": [ this.flight_icons( "middle" )[ "stairs" ] ]
			}
			return flight_icon_map[ flight_type ]
		}

		@$mol_action
		right_flight_click( event?: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const current_floor = this.current_floor()
			this.block_data().next_flight_status( current_floor, "right" )
		}

		next_passage_type( current_passage_type: typeof PassageType.options[ number ] ) {
			const passage_type_map = {} as { [ key in typeof PassageType.options[ number ] ]: typeof PassageType.options[ number ] }
			PassageType.options.forEach( ( t, i ) => {
				const next_passage_type = PassageType.options[ ( i + 1 ) % PassageType.options.length ]
				passage_type_map[ t ] = next_passage_type
			} )
			return passage_type_map[ current_passage_type ]
		}

		@$mol_mem
		up_left_passage_type(): string {
			const floor = this.current_floor()
			return this.block_data().up_left_passage_type( floor )
		}
		@$mol_action
		up_left_passage_click( event: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const floor = this.current_floor()
			const current_passage_type = this.block_data().up_left_passage_type( floor )

			const next_passage_type = this.next_passage_type( current_passage_type )
			this.block_data().up_left_passage_type( floor, next_passage_type )
		}
		@$mol_mem
		up_middle_passage_type(): string {
			const floor = this.current_floor()
			return this.block_data().up_middle_passage_type( floor )
		}
		@$mol_action
		up_middle_passage_click( event: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const floor = this.current_floor()
			const current_passage_type = this.block_data().up_middle_passage_type( floor )

			const next_passage_type = this.next_passage_type( current_passage_type )
			this.block_data().up_middle_passage_type( floor, next_passage_type )
		}
		@$mol_mem
		up_right_passage_type(): string {
			const floor = this.current_floor()
			return this.block_data().up_right_passage_type( floor )
		}
		@$mol_action
		up_right_passage_click( event: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const floor = this.current_floor()
			const current_passage_type = this.block_data().up_right_passage_type( floor )

			const next_passage_type = this.next_passage_type( current_passage_type )
			this.block_data().up_right_passage_type( floor, next_passage_type )
		}
		@$mol_mem
		down_left_passage_type(): string {
			const floor = this.current_floor()
			return this.block_data().down_left_passage_type( floor )
		}
		@$mol_action
		down_left_passage_click( event: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const floor = this.current_floor()
			const current_passage_type = this.block_data().down_left_passage_type( floor )

			const next_passage_type = this.next_passage_type( current_passage_type )
			this.block_data().down_left_passage_type( floor, next_passage_type )
		}
		@$mol_mem
		down_middle_passage_type(): string {
			const floor = this.current_floor()
			return this.block_data().down_middle_passage_type( floor )
		}
		@$mol_action
		down_middle_passage_click( event: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const floor = this.current_floor()
			const current_passage_type = this.block_data().down_middle_passage_type( floor )

			const next_passage_type = this.next_passage_type( current_passage_type )
			this.block_data().down_middle_passage_type( floor, next_passage_type )
		}
		@$mol_mem
		down_right_passage_type(): string {
			const floor = this.current_floor()
			return this.block_data().down_right_passage_type( floor )
		}
		@$mol_action
		down_right_passage_click( event: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const floor = this.current_floor()
			const current_passage_type = this.block_data().down_right_passage_type( floor )

			const next_passage_type = this.next_passage_type( current_passage_type )
			this.block_data().down_right_passage_type( floor, next_passage_type )
		}
		@$mol_mem
		is_up_flight( next?: boolean ): boolean {
			return this.block_data().IsMiddleFlight( null )?.val( next ) ?? false
		}
		@$mol_mem
		up_passage_or_flight() {
			if( this.is_up_flight() ) {
				return this.up_flight()
			} else {
				return this.up_middle_passage()
			}
		}
		readonly parts = [ this.name_part(), this.info_part(), this.places_part(), this.profession_part() ]
		readonly dir_shift: { [ dir in DirectionType ]: number } = {
			up: 0,
			right: 1,
			down: 2,
			left: 3,
		}
		@$mol_mem
		up_left_part() {
			const shift = ( this.dir_shift[ this.block_direction() ] + 0 ) % 4
			return this.parts[ shift ]
		}

		@$mol_mem
		up_right_part() {
			const shift = ( this.dir_shift[ this.block_direction() ] + 1 ) % 4
			return this.parts[ shift ]
		}

		@$mol_mem
		down_right_part() {
			const shift = ( this.dir_shift[ this.block_direction() ] + 2 ) % 4
			return this.parts[ shift ]
		}

		@$mol_mem
		down_left_part() {
			const shift = ( this.dir_shift[ this.block_direction() ] + 3 ) % 4
			return this.parts[ shift ]
		}

		@$mol_mem
		has_liquidator_profession() {
			return this.profession_floors( "liquidator" ).length > 0
		}
		@$mol_mem
		has_repairman_profession() {
			return this.profession_floors( "repairman" ).length > 0
		}
		@$mol_mem
		has_cleaner_profession() {
			return this.profession_floors( "cleaner" ).length > 0
		}
		@$mol_mem
		has_plumber_profession() {
			return this.profession_floors( "plumber" ).length > 0
		}

		@$mol_mem
		liquidator_profession(): ReturnType<$.$apxu_samosbor_map_block[ "liquidator_icon" ]> | null {
			return this.has_liquidator_profession() ? this.liquidator_icon() : null
		}

		@$mol_mem
		repairman_profession() {
			return this.has_repairman_profession() ? this.repairman_icon() : null
		}

		@$mol_mem
		cleaner_profession() {
			return this.has_cleaner_profession() ? this.cleaner_icon() : null
		}

		@$mol_mem
		plumber_profession() {
			return this.has_plumber_profession() ? this.factory_icon() : null
		}

		@$mol_mem
		has_hospital_place() {
			return this.place_floors( "hospital" ).length > 0
		}
		@$mol_mem
		has_party_place() {
			return this.place_floors( "party" ).length > 0
		}
		@$mol_mem
		has_theatre_place() {
			return this.place_floors( "theatre" ).length > 0
		}
		@$mol_mem
		has_safe_place() {
			return this.safe_floors().length > 0
		}

		@$mol_mem
		party_place() {
			return this.has_party_place() ? this.party_icon() : null
		}

		@$mol_mem
		theatre_place() {
			return this.has_theatre_place() ? this.theatre_icon() : null
		}

		@$mol_mem
		hospital_place() {
			return this.has_hospital_place() ? this.hospital_icon() : null
		}

		@$mol_mem
		safe_place() {
			return this.has_safe_place() ? this.house_icon() : null
		}

		@$mol_mem
		flooded() {
			return this.flood_floor_value() !== null ? this.flooded_effect() : null
		}
		@$mol_mem
		roof() {
			return this.roof_floor_value() !== null ? this.roof_effect() : null
		}

		@$mol_mem
		fence_type( next?: typeof FenceData.options[ number ] ): string {
			return this.block_data().FloorsData( null )?.key( this.current_floor() ).fence_type( next ) ?? "missing"
		}
		@$mol_action
		fence_click( event?: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			event?.preventDefault()
			this.block_data().FloorsData( null )?.key( this.current_floor() ).set_next_fence_type()
		}
	}
}
