namespace $ {
	export function num_to_bigint( num?: number ) {
		return ( num !== undefined && !isNaN( num ) ) ? BigInt( num ) : undefined
	}


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
		IsDouble: $hyoo_crus_atom_bool,
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

		static get_passage_type( transition: TransitionPosition, floor_data?: FloorData, next?: typeof PassageType.options[ number ] ) {
			if( transition === "up_middle" || transition === "down_middle" ) {
				return "noway"
			}
			const property_name = FloorData.positions_map[ transition ]
			const passage_type = floor_data?.[ property_name ]( next )?.Type( next )?.val( next )
			if( transition === "right" || transition === "left" ) {
				return passage_type ?? "normal"
			}
			return passage_type ?? "noway"
		}

		static is_passage_free( transition: TransitionPosition, floor_data?: FloorData ) {
			return this.get_passage_type( transition, floor_data ) !== "noway"
		}

		@$mol_mem_key
		get_passage_type( transition: TransitionPosition ): typeof PassageType.options[ number ] {
			return FloorData.get_passage_type( transition, this )
		}

		@$mol_mem_key
		is_passage_free( transition: TransitionPosition ) {
			return FloorData.is_passage_free( transition, this )
		}

		@$mol_mem
		fence_type( next?: typeof FenceData.options[ number ] ) {
			return this.Fence( next )?.val( next ) ?? "missing"
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
				return this.LeftFlight( next )?.val( next ) ?? "free"
			}
			if( what === "right" ) {
				return this.RightFlight( next )?.val( next ) ?? "free"
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

		@$mol_mem
		all_passages() {
			return TransitionPositions.map( ( pos ) => {
				return this.get_passage_type( pos )
			} )
		}

		@$mol_mem
		is_double_floor( next?: boolean ) {
			return this.IsDouble( next )?.val( next ) ?? false
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
		"spleef", "pool", "warehouse", "shower", "toilet", "gallery"
	] ) {}
	export class PlaceData extends $hyoo_crus_dict.with( {
		Type: PlaceType,
		Floor: $hyoo_crus_atom_int,
	} ) {}
	// $apxu_samosbor_map_app_researcher.use()

	export class $apxu_samosbor_map_block_data extends ( $hyoo_crus_entity.with( {
		IsPipe: $hyoo_crus_atom_bool,

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
			return this.Name( next )?.val( next ) ?? "N-00"
		}
		@$mol_mem
		direction( next?: DirectionType ) {
			return this.Direction( next )?.val( next ) ?? "up"
		}
		@$mol_mem
		block_type( next?: typeof BlockType.options[ number ] ) {
			return this.Type( next )?.val( next ) ?? "residential"
		}
		@$mol_mem
		transitions( next?: TransitionData[] ) {
			return this.Transitions( next )?.remote_list( next ) ?? []
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
			return Number( this.PositionX( next )?.val( num_to_bigint( next ) ) ?? 0 )
		}
		@$mol_mem
		pos_y( next?: number ) {
			return Number( this.PositionY( next )?.val( num_to_bigint( next ) ) ?? 0 )
		}
		@$mol_mem
		layer( next?: number ) {
			return Number( this.Layer( next )?.val( num_to_bigint( next ) ) ?? 0 )
		}
		@$mol_mem
		min_floor( next?: number ) {
			return Number( this.MinFloor( next )?.val( num_to_bigint( next ) ) ?? 0 )
		}
		@$mol_mem
		max_floor( next?: number ) {
			return Number( this.MaxFloor( next )?.val( num_to_bigint( next ) ) ?? 0 )
		}
		@$mol_mem
		generator_floor( next?: number ) {
			return Number( this.Generator( next )?.val( num_to_bigint( next ) ) ?? 0 )
		}
		@$mol_mem
		left_flight_status( next?: typeof FlightStatus.options[ number ] ) {
			return this.LeftFlight( next )?.Status( next )?.val( next )
		}
		@$mol_mem
		left_flight_type( next?: typeof FlightType.options[ number ] ) {
			return this.LeftFlight( next )?.Type( next )?.val( next ) ?? "stairs"
		}

		@$mol_mem
		right_flight_status( next?: typeof FlightStatus.options[ number ] ) {
			return this.RightFlight( next )?.Status( next )?.val( next )
		}
		@$mol_mem
		right_flight_type( next?: typeof FlightType.options[ number ] ) {
			return this.RightFlight( next )?.Type( next )?.val( next ) ?? "stairs"
		}

		@$mol_mem
		middle_flight_type( next?: typeof FlightType.options[ number ] ) {
			return this.MiddleFlight( next )?.Type( next )?.val( next ) ?? "stairs"
		}

		@$mol_mem_key
		passage_type( [ floor, what ]: [ number, TransitionPosition ], next?: typeof PassageType.options[ number ] ) {
			return FloorData.get_passage_type( what, this.FloorsData( next )?.key( floor, next ), next )
		}

		@$mol_mem_key
		flight_status( { floor, what }: { floor: number, what: "left" | "right" } ) {
			return this.FloorsData()?.key( floor )?.flight_status( what ) ?? "free"
		}
		@$mol_action
		next_flight_status( floor: number, what: "left" | "right" ) {
			this.FloorsData( true )?.key( floor, true ).next_flight_status( what )
		}

		@$mol_mem
		board_floor( next?: number ) {
			const holder = this.BoardFloor( next )
			if( !holder ) return null
			if( next !== undefined && isNaN( next ) ) {
				return holder.val( null )
			}
			const val = typeof next === "number" ? BigInt( next ) : next
			return holder.val( val )
		}

		@$mol_mem
		mail_floor( next?: number ) {
			const holder = this.MailFloor( next )
			if( !holder ) return null
			if( next !== undefined && isNaN( next ) ) {
				return holder.val( null )
			}
			const val = typeof next === "number" ? BigInt( next ) : next
			return holder.val( val )
		}

		@$mol_mem
		roof_floor( next?: number ) {
			const holder = this.RoofFloor( next )
			if( !holder ) return null
			if( next !== undefined && isNaN( next ) ) {
				return holder.val( null )
			}
			const val = typeof next === "number" ? BigInt( next ) : next
			return holder.val( val )
		}

		@$mol_mem
		flood_floor( next?: number ) {
			const holder = this.FloodFloor( next )
			if( !holder ) return null
			if( next !== undefined && isNaN( next ) ) {
				return holder.val( null )
			}
			const val = typeof next === "number" ? BigInt( next ) : next
			return holder.val( val )
		}

		@$mol_mem_key
		profession_floors( what: typeof ProfessionType.options[ number ] ) {
			return this.Professions()?.remote_list().filter( ( data ) => data.Type( null )?.val() === what ) ?? []
		}

		@$mol_action
		add_profession( what: typeof ProfessionType.options[ number ] ) {
			const node = this.Professions( true )?.make( this.land() ) // TODO права
			node?.Type( true )?.val( what )
			return node
		}

		@$mol_action
		remove_profession( node: $hyoo_crus_vary_type ) {
			this.Professions( true )?.cut( node )
		}

		@$mol_mem_key
		place_floors( what: typeof PlaceType.options[ number ] ) {
			return this.Places()?.remote_list().filter( ( data ) => data.Type( null )?.val() === what ) ?? []
		}
		@$mol_mem
		safe_floors() {
			const safe_place_types: typeof PlaceType.options[ number ][] = [
				"theatre", "party", "gym", "overview", "gallery",
				"racing", "hockey", "spleef", "pool", "warehouse"
			]
			const safe_places = this.Places()?.remote_list()
				.filter( ( place ) => {
					const place_type = place.Type()?.val()
					if( !place_type ) return
					return safe_place_types.includes( place_type )
				} ) ?? []
			const safe_profession_types: typeof ProfessionType.options[ number ][] = [ "liquidator", "plumber" ]
			const safe_professions = this.Professions()?.remote_list()
				.filter( ( profession ) => {
					const profession_type = profession.Type()?.val()
					if( !profession_type ) return
					return safe_profession_types.includes( profession_type )
				} ) ?? []
			const all_safe_places: ( PlaceData | ProfessionData )[] = []
			return all_safe_places.concat( safe_places ).concat( safe_professions )
		}
		@$mol_action
		add_place( what: typeof PlaceType.options[ number ] ) {
			const node = this.Places( true )?.make( this.land() ) // TODO права
			node?.Type( true )?.val( what )
			return node
		}
		@$mol_action
		remove_place( node: $hyoo_crus_vary_type ) {
			this.Places( true )?.cut( node )
		}

		@$mol_mem_key
		all_passages( floor: number ) {
			return this.FloorsData()?.key( floor )?.all_passages() ?? []
		}

		@$mol_mem_key
		double_floors_count( floor: number ) {
			const all_floors = this.FloorsData()?.keys()
				.filter( ( num ) => floor > 0
					? ( Number( num ) > 0 && Number( num ) < floor )
					: ( Number( num ) < 0 && Number( num ) > floor ) ) ?? []
			const count = all_floors.reduce( ( count: number, floor_num ) => {
				if( this.is_double_floor( Number( floor_num ) ) ) {
					return count + 1
				}
				return count
			}, 0 )
			return count
		}

		@$mol_mem_key
		numerical_floor(floor_index: number): number {
			const double_count = this.double_floors_count( floor_index )
			const numerical_floor = floor_index - ( floor_index > 0 ? double_count : -double_count )
			return numerical_floor
		}

		@$mol_mem_key
		display_floor(floor_index: number) {
			const numerical_floor = this.numerical_floor(floor_index)
			const rounded_floor = Math.max( this.min_floor(), Math.min( numerical_floor, this.max_floor() ) )
			const suffix = this.is_double_floor(floor_index)
				? "/1" : this.is_double_floor( floor_index - Math.sign( floor_index ) )
					? "/2" : ""
			return `${ rounded_floor }${ suffix }`
		}

		@$mol_mem
		min_floor_index() {
			const min_floor = this.min_floor()
			return min_floor - this.double_floors_count(min_floor)
		}
		@$mol_mem
		max_floor_index() {
			const max_floor = this.max_floor()
			return max_floor + this.double_floors_count(max_floor)
		}

		@$mol_mem_key
		is_double_floor( floor: number, next?: boolean ) {
			return this.FloorsData( next )?.key( floor, next )?.is_double_floor( next ) ?? false
		}

	}

	export class $apxu_samosbor_map_block_pipe_data extends $apxu_samosbor_map_block_data.with( {
	} ) {

	}
}
