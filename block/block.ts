namespace $ {
	export type DirectionType = "up" | "right" | "down" | "left"
	export type TransitionPosition = "up_left" | "up_middle" | "up_right" | "right" | "down_right" | "down_middle" | "down_left" | "left"
	export const TransitionPositions: TransitionPosition[] = [ "up_left", "up_middle", "up_right", "right", "down_right", "down_middle", "down_left", "left" ]

	export class BlockDirection extends $hyoo_crus_atom_enum( [ "up", "right", "down", "left" ] ) {}
	export class TransitionPositionData extends $hyoo_crus_atom_enum( TransitionPositions ) {}
	export class TransitionPort extends $hyoo_crus_dict.with( {
		Block: $hyoo_crus_atom_ref_to( () => $apxu_samosbor_map_block_data ),
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

			const from_block = from_block_ref && this.$.$apxu_samosbor_map_app.block( from_block_ref )
			const to_block_ref = this.To( null )?.Block( null )?.val()
			const to_block = to_block_ref && this.$.$apxu_samosbor_map_app.block( to_block_ref )
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
		Fence: FenceData,
		LeftFlight: FlightStatus,
		RightFlight: FlightStatus,
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
			if( transition === "up_middle" || transition === "down_middle" ) {
				return "noway"
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

		@$mol_mem_key
		flight_status( what: "left" | "right", next?: typeof FlightStatus.options[ number ] ) {
			if( what === "left" ) {
				return this.LeftFlight( true )?.val( next ) ?? "free"
			}
			if( what === "right" ) {
				return this.RightFlight( true )?.val( next ) ?? "free"
			}
			return "free"
		}

		@$mol_action
		next_flight_status( what: "left" | "right" ) {
			const current_status = this.flight_status( what )
			const id = FlightStatus.options.indexOf( current_status )
			const new_status = FlightStatus.options[ ( id + 1 ) % FlightStatus.options.length ]
			this.flight_status( what, new_status )
		}

	}

	export class FloorsData extends $hyoo_crus_dict_to( FloorData ) {}

	export class BlockType extends $hyoo_crus_atom_enum( [ "residential", "frozen", "infected", "destroyed" ] ) {}

	export class ProfessionType extends $hyoo_crus_atom_enum( [ "liquidator", "repairman", "cleaner", "plumber" ] ) {}
	export class ProfessionData extends $hyoo_crus_dict.with( {
		Type: ProfessionType,
		Floor: $hyoo_crus_atom_int,
	} ) {}

	export class PlaceType extends $hyoo_crus_atom_enum( [
		"theatre", "hospital", "party", "gym",
		"laundry", "postal", "overview", "racing", "hockey",
		"spleef", "pool", "warehouse", "shower", "toilet"
	] ) {}
	export class PlaceData extends $hyoo_crus_dict.with( {
		Type: PlaceType,
		Floor: $hyoo_crus_atom_int,
	} ) {}
	// $apxu_samosbor_map_app_researcher.use()

	export class $apxu_samosbor_map_block_data extends ( $hyoo_crus_entity.with( {
		Name: $hyoo_crus_atom_str,
		Direction: BlockDirection,
		Type: BlockType,
		Transitions: $hyoo_crus_list_ref_to( () => TransitionData ),
		PositionX: $hyoo_crus_atom_int,
		PositionY: $hyoo_crus_atom_int,
		Layer: $hyoo_crus_atom_int,
		Generator: $hyoo_crus_atom_int,
		BoardFloor: $hyoo_crus_atom_int,
		MailFloor: $hyoo_crus_atom_int,
		RoofFloor: $hyoo_crus_atom_int,
		FloodFloor: $hyoo_crus_atom_int,
		MinFloor: $hyoo_crus_atom_int,
		MaxFloor: $hyoo_crus_atom_int,
		LeftFlight: FlightData,
		RightFlight: FlightData,
		FloorsData: FloorsData,
		IsMiddleFlight: $hyoo_crus_atom_bool,
		MiddleFlight: FlightData,
		HasBalcony: $hyoo_crus_atom_bool,

		Professions: $hyoo_crus_list_ref_to( () => ProfessionData ),
		Places: $hyoo_crus_list_ref_to( () => PlaceData ),

	} ) ) {
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
		connect( my_floor: number, my_pos: TransitionPosition, block_node: $apxu_samosbor_map_block_data, another_floor: number, another_pos: TransitionPosition ) {
			const trans = this.Transitions( null )?.make( this.land() )

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

		@$mol_mem
		middle_flight_type( next?: typeof FlightType.options[ number ] ) {
			return this.MiddleFlight( null )?.Type( null )?.val( next ) ?? "stairs"
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
		flight_status( { floor, what }: { floor: number, what: "left" | "right" } ) {
			return this.FloorsData( true )?.key( floor, true ).flight_status( what ) ?? "free"
		}
		@$mol_action
		next_flight_status( floor: number, what: "left" | "right" ) {
			this.FloorsData( true )?.key( floor, true ).next_flight_status( what )
		}

		@$mol_mem
		board_floor( next?: number ) {
			const holder = this.BoardFloor( null )
			if( !holder ) return null
			if( next !== undefined && isNaN( next ) ) {
				return holder.val( null )
			}
			const val = typeof next === "number" ? BigInt( next ) : next
			return holder.val( val )
		}

		@$mol_mem
		mail_floor( next?: number ) {
			const holder = this.MailFloor( null )
			if( !holder ) return null
			if( next !== undefined && isNaN( next ) ) {
				return holder.val( null )
			}
			const val = typeof next === "number" ? BigInt( next ) : next
			return holder.val( val )
		}

		@$mol_mem
		roof_floor( next?: number ) {
			const holder = this.RoofFloor( null )
			if( !holder ) return null
			if( next !== undefined && isNaN( next ) ) {
				return holder.val( null )
			}
			const val = typeof next === "number" ? BigInt( next ) : next
			return holder.val( val )
		}

		@$mol_mem
		flood_floor( next?: number ) {
			const holder = this.FloodFloor( null )
			if( !holder ) return null
			if( next !== undefined && isNaN( next ) ) {
				return holder.val( null )
			}
			const val = typeof next === "number" ? BigInt( next ) : next
			return holder.val( val )
		}

		@$mol_mem_key
		profession_floors( what: typeof ProfessionType.options[ number ] ) {
			return this.Professions( null )?.remote_list().filter( ( data ) => data.Type( null )?.val() === what ) ?? []
		}

		@$mol_action
		add_profession( what: typeof ProfessionType.options[ number ] ) {
			const node = this.Professions( null )?.make( this.land() ) // TODO права
			node?.Type( null )?.val( what )
			return node
		}

		@$mol_action
		remove_profession( node: $hyoo_crus_vary_type ) {
			this.Professions( null )?.cut( node )
		}

		@$mol_mem_key
		place_floors( what: typeof PlaceType.options[ number ] ) {
			return this.Places( null )?.remote_list().filter( ( data ) => data.Type( null )?.val() === what ) ?? []
		}
		@$mol_mem
		safe_floors() {
			const safe_place_types: typeof PlaceType.options[ number ][] = [
				"theatre", "party", "gym", "overview",
				"racing", "hockey", "spleef", "pool", "warehouse"
			]
			const safe_places = this.Places( null )?.remote_list()
				.filter( ( place ) => {
					const place_type = place.Type( null )?.val()
					if( !place_type ) return
					return safe_place_types.includes( place_type )
				} ) ?? []
			const safe_profession_types: typeof ProfessionType.options[ number ][] = [ "liquidator", "plumber" ]
			const safe_professions = this.Professions( null )?.remote_list()
				.filter( ( profession ) => {
					const profession_type = profession.Type( null )?.val()
					if( !profession_type ) return
					return safe_profession_types.includes( profession_type )
				} ) ?? []
			const all_safe_places: ( PlaceData | ProfessionData )[] = []
			return all_safe_places.concat( safe_places ).concat( safe_professions )
		}
		@$mol_action
		add_place( what: typeof PlaceType.options[ number ] ) {
			const node = this.Places( null )?.make( this.land() ) // TODO права
			node?.Type( null )?.val( what )
			return node
		}
		@$mol_action
		remove_place( node: $hyoo_crus_vary_type ) {
			this.Places( null )?.cut( node )
		}

	}
}
