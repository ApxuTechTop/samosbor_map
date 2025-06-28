namespace $.$$ {

	export type DirectionType = "up" | "right" | "down" | "left"
	export type TransitionPosition = "up_left" | "up_middle" | "up_right" | "right" | "down_right" | "down_middle" | "down_left" | "left"
	export const TransitionPositions: TransitionPosition[] = [ "up_left", "up_middle", "up_right", "right", "down_right", "down_middle", "down_left", "left" ]
	interface Block {
		name: string,
		direction: "up" | "right" | "down" | "left",
		pos_x?: number,
		pos_y?: number,
		layer?: number,
		min_floor?: number,
		max_floor?: number,
	}

	export class BlockDirection extends $hyoo_crus_atom_enum( [ "up", "right", "down", "left" ] ) {}
	export class TransitionPositionData extends $hyoo_crus_atom_enum( TransitionPositions ) {}
	export class TransitionPort extends $hyoo_crus_dict.with( {
		Block: $hyoo_crus_atom_ref_to( () => $apxutechtop_samosbor_map_block_data ),
		Floor: $hyoo_crus_atom_int,
		Position: TransitionPositionData,
	} ) {

		is_correct( floor: number, position: typeof TransitionPositionData.options[ number ] ) {
			return this.Floor( null )?.val() === BigInt( floor ) && this.Position( null )?.val() === position
		}
	}
	export class TransitionData extends $hyoo_crus_dict.with( {
		From: TransitionPort,
		To: TransitionPort
	} ) {
		@$mol_mem
		get_connected_block( ref: any ) {
			if( this.From( null )?.Block( null )?.val() === ref ) {
				return this.To( null )?.Block()?.val()
			}
			return this.From( null )?.Block( null )?.val()
		}

		@$mol_action
		remove_transition() {
			const from_block_ref = this.From( null )?.Block( null )?.val()

			const from_block = from_block_ref && $apxutechtop_samosbor_map_app.block( from_block_ref )
			const to_block_ref = this.To( null )?.Block( null )?.val()
			const to_block = to_block_ref && $apxutechtop_samosbor_map_app.block( to_block_ref )
			to_block?.Transitions( null )?.cut( this.ref() )
			from_block?.Transitions( null )?.cut( this.ref() )
		}
	}

	export class FlightType extends $hyoo_crus_atom_enum( [ "stairs", "elevator", "ladder_elevator" ] ) {}
	export class FlightStatus extends $hyoo_crus_atom_enum( [ "free", "blocked" ] ) {}
	export class FlightData extends $hyoo_crus_dict.with( {
		Type: FlightType,
		Status: FlightStatus,
	} ) {}

	export class PassageType extends $hyoo_crus_atom_enum( [ "noway", "normal", "stairs_up", "stairs_down" ] ) {}
	export class PassageStatus extends $hyoo_crus_atom_enum( [ "free", "blocked", "danger" ] ) {}
	export class PassageData extends $hyoo_crus_dict.with( {
		Type: PassageType,
		Status: PassageStatus,
	} ) {}

	const PassageDirections = {
		UpLeftPassage: PassageData,
		UpMiddlePassage: PassageData,
		UpRightPassage: PassageData,
		LeftPassage: PassageData,
		RightPassage: PassageData,
		DownLeftPassage: PassageData,
		DownMiddlePassage: PassageData,
		DownRightPassage: PassageData,
	}
	const FenceTypes = [ "missing", "hole", "solid" ] as const
	export class FenceData extends $hyoo_crus_atom_enum( FenceTypes ) {}

	export class FloorData extends $hyoo_crus_dict.with( {
		...PassageDirections,
		Fence: FenceData
	} ) {
		static readonly positions_map: { [ pos in TransitionPosition ]: keyof typeof PassageDirections } = {
			up_left: "UpLeftPassage",
			up_middle: "UpMiddlePassage",
			up_right: "UpRightPassage",
			right: "RightPassage",
			down_right: "DownRightPassage",
			down_middle: "DownMiddlePassage",
			down_left: "DownLeftPassage",
			left: "LeftPassage"
		}

		@$mol_mem_key
		get_passage_type( transition: TransitionPosition ): typeof PassageType.options[ number ] {
			if( transition === "right" || transition === "left" ) {
				return "normal"
			}
			const property_name = FloorData.positions_map[ transition ]
			const passage_type = this[ property_name ]( null )?.Type( null )?.val()
			return passage_type ?? "noway"
		}

		@$mol_mem_key
		is_passage_free( transition: TransitionPosition ) {
			const passage_type = this.get_passage_type( transition )
			if( !passage_type ) return false
			if( passage_type === "noway" ) return false
			return true
		}

		@$mol_mem
		fence_type( next?: typeof FenceData.options[ number ] ) {
			return this.Fence( null )?.val( next ) ?? "missing"
		}
		@$mol_action
		set_next_fence_type() {
			const current_type = this.fence_type()
			const id = FenceTypes.indexOf( current_type )
			const new_type = FenceTypes[ ( id + 1 ) % FenceTypes.length ]
			this.fence_type( new_type )
		}

	}

	export class FloorsData extends $hyoo_crus_dict_to( FloorData ) {}

	export class BlockType extends $hyoo_crus_atom_enum( [ "residential", "abandoned", "frozen", "infected", "destroyed" ] ) {}

	export class ProfessionType extends $hyoo_crus_atom_enum( [ "luquidator", "repairman", "cleaner", "plumber" ] ) {}
	export class ProfessionData extends $hyoo_crus_dict.with( {
		Type: ProfessionType,
		Floor: $hyoo_crus_atom_int,
	} ) {}

	export class PlaceType extends $hyoo_crus_atom_enum( [ "theatre", "hospital", "party", "warehouse" ] ) {}
	export class PlaceData extends $hyoo_crus_dict.with( {
		Type: PlaceType,
		Floor: $hyoo_crus_atom_int,
	} ) {}

	export class $apxutechtop_samosbor_map_block_data extends $hyoo_crus_entity.with( {
		Name: $hyoo_crus_atom_str,
		Direction: BlockDirection,
		Type: BlockType,
		Transitions: $hyoo_crus_list_ref_to( () => TransitionData ),
		PositionX: $hyoo_crus_atom_int,
		PositionY: $hyoo_crus_atom_int,
		Layer: $hyoo_crus_atom_int,
		Generator: $hyoo_crus_atom_int,
		MinFloor: $hyoo_crus_atom_int,
		MaxFloor: $hyoo_crus_atom_int,
		LeftFlight: FlightData,
		RightFlight: FlightData,
		FloorsData: FloorsData,
		UpMiddleFlight: $hyoo_crus_atom_bool,
		DownMiddleFlight: $hyoo_crus_atom_bool,

		Professions: $hyoo_crus_list_ref_to( () => ProfessionData ),

	} ) {
		@$mol_mem
		name( next?: string ) {
			return this.Name( null )?.val( next ) ?? "N-00"
		}
		@$mol_mem
		direction( next?: DirectionType ) {
			return this.Direction( null )?.val( next ) ?? "up"
		}
		@$mol_mem
		block_type( next?: typeof BlockType.options[ number ] ) {
			return this.Type( null )?.val( next ) ?? "residential"
		}
		@$mol_mem
		transitions( next?: TransitionData[] ) {
			return this.Transitions( null )?.remote_list( next )
		}

		transition_by_position( floor: number, position: TransitionPosition ) {
			return this.transitions()?.find( ( transition ) => {
				return ( transition.From( null )?.Block( null )?.val() === this.ref() && transition.From( null )?.is_correct( floor, position ) ) || transition.To( null )?.Block( null )?.val() === this.ref() && transition.To( null )?.is_correct( floor, position )
			} )
		}

		@$mol_action
		connect( my_floor: number, my_pos: TransitionPosition, block_node: $apxutechtop_samosbor_map_block_data, another_floor: number, another_pos: TransitionPosition ) {
			const trans = this.Transitions( null )?.make( { '': $hyoo_crus_rank_read } )
			if( !trans ) return
			block_node.Transitions( null )?.add( trans.ref() )
			trans.From( null )?.Floor( null )?.val( BigInt( my_floor ) )
			trans.From( null )?.Position( null )?.val( my_pos )
			trans.From( null )?.Block( null )?.val( this.ref() )
			trans.To( null )?.Floor( null )?.val( BigInt( another_floor ) )
			trans.To( null )?.Position( null )?.val( another_pos )
			trans.To( null )?.Block( null )?.val( block_node.ref() )
		}
		@$mol_action
		remove_transition( transition: TransitionData ) {
			// TODO
		}
		@$mol_mem
		pos_x( next?: number ) {
			return Number( this.PositionX( null )?.val( next !== undefined ? BigInt( next ) : undefined ) ?? 0 )
		}
		@$mol_mem
		pos_y( next?: number ) {
			return Number( this.PositionY( null )?.val( next !== undefined ? BigInt( next ) : undefined ) ?? 0 )
		}
		@$mol_mem
		layer( next?: number ) {
			return Number( this.Layer( null )?.val( next !== undefined ? BigInt( next ) : undefined ) ?? 0 )
		}
		@$mol_mem
		min_floor( next?: number ) {
			return Number( this.MinFloor( null )?.val( next !== undefined ? BigInt( next ) : undefined ) ?? 0 )
		}
		@$mol_mem
		max_floor( next?: number ) {
			return Number( this.MaxFloor( null )?.val( next !== undefined ? BigInt( next ) : undefined ) ?? 0 )
		}
		@$mol_mem
		generator_floor( next?: number ) {
			return Number( this.Generator( null )?.val( next !== undefined ? BigInt( next ) : undefined ) ?? 0 )
		}
		@$mol_mem
		left_flight_status( next?: typeof FlightStatus.options[ number ] ) {
			return this.LeftFlight( null )?.Status( null )?.val( next )
		}
		@$mol_mem
		left_flight_type( next?: typeof FlightType.options[ number ] ) {
			return this.LeftFlight( null )?.Type( null )?.val( next ) ?? "stairs"
		}

		@$mol_mem
		right_flight_status( next?: typeof FlightStatus.options[ number ] ) {
			return this.RightFlight( null )?.Status( null )?.val( next )
		}
		@$mol_mem
		right_flight_type( next?: typeof FlightType.options[ number ] ) {
			return this.RightFlight( null )?.Type( null )?.val( next ) ?? "stairs"
		}

		@$mol_mem_key
		up_left_passage_type( floor: number, next?: typeof PassageType.options[ number ] ) {
			return this.FloorsData( null )?.key( floor, null ).UpLeftPassage( null )?.Type( null )?.val( next ) ?? "noway"
		}
		@$mol_mem_key
		up_middle_passage_type( floor: number, next?: typeof PassageType.options[ number ] ) {
			return this.FloorsData( null )?.key( floor, null ).UpMiddlePassage( null )?.Type( null )?.val( next ) ?? "noway"
		}
		@$mol_mem_key
		up_right_passage_type( floor: number, next?: typeof PassageType.options[ number ] ) {
			return this.FloorsData( null )?.key( floor, null ).UpRightPassage( null )?.Type( null )?.val( next ) ?? "noway"
		}
		@$mol_mem_key
		down_left_passage_type( floor: number, next?: typeof PassageType.options[ number ] ) {
			return this.FloorsData( null )?.key( floor, null ).DownLeftPassage( null )?.Type( null )?.val( next ) ?? "noway"
		}
		@$mol_mem_key
		down_middle_passage_type( floor: number, next?: typeof PassageType.options[ number ] ) {
			return this.FloorsData( null )?.key( floor, null ).DownMiddlePassage( null )?.Type( null )?.val( next ) ?? "noway"
		}
		@$mol_mem_key
		down_right_passage_type( floor: number, next?: typeof PassageType.options[ number ] ) {
			return this.FloorsData( null )?.key( floor, null ).DownRightPassage( null )?.Type( null )?.val( next ) ?? "noway"
		}

		@$mol_mem_key
		get_passage_type( floor: number, position: TransitionPosition ) {

		}

	}
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
	export class $apxutechtop_samosbor_map_block_passage extends $.$apxutechtop_samosbor_map_block_passage {
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
	export class $apxutechtop_samosbor_map_block extends $.$apxutechtop_samosbor_map_block {
		// @$mol_mem
		// block_name(next?: string) {
		// 	return next ?? "qwe"
		// }
		// @$mol_mem_key
		// block_link( block_name: string, next?: Block ): Block {
		// 	return $apxutechtop_samosbor_map_app.block(block_name, next)
		// }
		@$mol_mem
		block_ref( next?: $apxutechtop_samosbor_map_block_data ) {
			return next!
		}
		@$mol_mem
		block_data( next?: $apxutechtop_samosbor_map_block_data ): $apxutechtop_samosbor_map_block_data {
			return next!
		}
		@$mol_mem
		block_direction( next?: DirectionType ) {
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
			return this.current_layer() - this.block_layer()
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
			return ( this.min_floor() <= this.current_floor() ) && ( this.current_floor() <= this.max_floor() )
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
				const block_data = $hyoo_crus_glob.Node( from_block_ref, $apxutechtop_samosbor_map_block_data )
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
			const transition_offset = $apxutechtop_samosbor_map_app.getOffset( position, this.block_direction() )
			const abs_dir = $apxutechtop_samosbor_map_app.absolute_direction( this.block_direction(), position )
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
			const absolute_direction = $apxutechtop_samosbor_map_app.absolute_direction( block.direction(), node.From( null )?.Position( null )?.val()! )
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
			const connectionOffset = $apxutechtop_samosbor_map_app.getOffset( position, this.block_direction() )
			const abs_dir = $apxutechtop_samosbor_map_app.absolute_direction( this.block_direction(), position )
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
			const first_port = $apxutechtop_samosbor_map_block.first_port()
			const is_same_port = ( port: { block_ref: any, floor: number, position: TransitionPosition } ) => {
				return port.block_ref.description == this.block_data().ref().description && port.floor == this.current_floor() && port.position == position
			}
			// если кликнули по тому же соединению, убрать first_port
			if( first_port && is_same_port( first_port ) ) {
				$apxutechtop_samosbor_map_block.first_port( null )
				return
			}
			// если кликнули по тому же блоку, то ничего не делаем
			if( this.block_data().ref() === first_port?.block_ref ) return

			// если нет first_port добавить в first_port
			if( !first_port ) {
				$apxutechtop_samosbor_map_block.first_port( { block_ref: this.block_data().ref(), floor: this.current_floor(), position: position } )
				return
			}

			// создать соединение или удалить
			this.change_connection( position )
		}

		@$mol_action
		change_connection( position: TransitionPosition ) {
			const first_port = $apxutechtop_samosbor_map_block.first_port()
			console.log( "first port: ", first_port )
			if( !first_port ) return

			const first_block = $hyoo_crus_glob.Node( first_port.block_ref, $apxutechtop_samosbor_map_block_data )
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
				const another_block = $hyoo_crus_glob.Node( first_port.block_ref, $apxutechtop_samosbor_map_block_data )
				const another_floor = first_port.floor
				const another_position = first_port.position
				this.block_data().connect( this.current_floor(), position, another_block, another_floor, another_position )
			}
			$apxutechtop_samosbor_map_block.first_port( null )
		}

		@$mol_mem_key
		connection_highlight( position: TransitionPosition ) {
			const first_port = $apxutechtop_samosbor_map_block.first_port()
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

			const first_block = $hyoo_crus_glob.Node( first_port.block_ref, $apxutechtop_samosbor_map_block_data )
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

			const trans = Gigacluster.transition( block_name, floor_num, position )
			if( this.connect_mode() ) {
				this.on_connection_select( position )
			}
			if( trans ) {
				// повернуть блок
				return
			}
			if( this.connect_mode() ) return
			const offset = $apxutechtop_samosbor_map_app.getPositionOffset( position, this.block_direction() )
			const new_block_direction = $apxutechtop_samosbor_map_app.next_direction(
				$apxutechtop_samosbor_map_app.next_direction(
					$apxutechtop_samosbor_map_app.absolute_direction(
						this.block_direction(), position ) ) )

			const new_offset = $apxutechtop_samosbor_map_app.getPositionOffset( "up_left", new_block_direction )

			console.log( offset )
			const pos_x = Math.round( ( this.pos_x() + offset.x - new_offset.x ) )
			const pos_y = Math.round( ( this.pos_y() + offset.y - new_offset.y ) )
			const new_block_node = Gigacluster.create_block()
			if( !new_block_node ) return
			new_block_node.up_left_passage_type( 0, "normal" )
			this.block_data().connect( this.current_floor(), position, new_block_node, 0, "up_left" )
			new_block_node.name( new_block_name )
			new_block_node.direction( new_block_direction )
			new_block_node.pos_x( pos_x )
			new_block_node.pos_y( pos_y )
			return event
		}

		@$mol_mem
		has_middle_flight() {
			return this.is_up_flight() || this.is_down_flight()
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
			const current_flight_type = this.block_data().left_flight_type()
			const flight_type_map: { [ key in typeof FlightType.options[ number ] ]: typeof FlightType.options[ number ] } = { stairs: "elevator", elevator: "ladder_elevator", ladder_elevator: "stairs" }
			const next_flight_type = flight_type_map[ current_flight_type ]
			this.block_data().left_flight_type( next_flight_type )
		}

		@$mol_mem
		right_flight_icon() {
			const flight_type = this.block_data().right_flight_type()
			if( !flight_type || this.has_middle_flight() ) {
				return
			}
			return this.flight_icons( "right" )[ flight_type ]
		}

		@$mol_action
		right_flight_click( event?: PointerEvent ) {
			if( !this.edit_mode() ) return
			event?.stopImmediatePropagation()
			const current_flight_type = this.block_data().right_flight_type()
			const flight_type_map: { [ key in typeof FlightType.options[ number ] ]: typeof FlightType.options[ number ] } = { stairs: "elevator", elevator: "ladder_elevator", ladder_elevator: "stairs" }
			const next_flight_type = flight_type_map[ current_flight_type ]
			this.block_data().right_flight_type( next_flight_type )
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
			return this.block_data().UpMiddleFlight( null )?.val( next ) ?? false
		}
		@$mol_mem
		up_passage_or_flight() {
			if( this.is_up_flight() ) {
				return this.up_flight()
			} else {
				return this.up_middle_passage()
			}
		}
		@$mol_mem
		is_down_flight( next?: boolean ): boolean {
			return this.block_data().DownMiddleFlight( null )?.val( next ) ?? false
		}
		@$mol_mem
		down_passage_or_flight() {
			if( this.is_down_flight() ) {
				return this.down_flight()
			} else {
				return this.down_middle_passage()
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
			return Math.random() < 0.5
		}
		@$mol_mem
		has_repairman_profession() {
			return Math.random() < 0.5
		}
		@$mol_mem
		has_cleaner_profession() {
			return Math.random() < 0.5
		}
		@$mol_mem
		has_plumber_profession() {
			return Math.random() < 0.5
		}

		@$mol_mem
		liquidator_profession(): ReturnType<$.$apxutechtop_samosbor_map_block[ "liquidator_icon" ]> | null {
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
		has_theatre_place() {
			return Math.random() < 0.5
		}
		@$mol_mem
		has_party_place() {
			return Math.random() < 0.5
		}
		@$mol_mem
		has_hospital_place() {
			return Math.random() < 0.5
		}
		@$mol_mem
		has_warehouse_place() {
			return Math.random() < 0.5
		}

		@$mol_mem
		theatre_place() {
			return this.has_theatre_place() ? this.theatre_icon() : null
		}

		@$mol_mem
		party_place() {
			return this.has_party_place() ? this.party_icon() : null
		}

		@$mol_mem
		hospital_place() {
			return this.has_hospital_place() ? this.hospital_icon() : null
		}

		@$mol_mem
		warehouse_place() {
			return this.has_warehouse_place() ? this.warehouse_icon() : null
		}

		@$mol_mem
		fence_type( next?: typeof FenceData.options[ number ] ): string {
			return this.block_data().FloorsData( null )?.key( this.current_floor() ).fence_type( next ) ?? "missing"
		}
		@$mol_action
		fence_click( event?: PointerEvent ) {
			event?.stopImmediatePropagation()
			event?.preventDefault()
			this.block_data().FloorsData( null )?.key( this.current_floor() ).set_next_fence_type()
		}
	}
}
