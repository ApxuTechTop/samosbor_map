namespace $.$$ {
	type DirectionType = "up" | "right" | "down" | "left"
	const TransitionPositions: TransitionPosition[] = [ "up_left", "up_right", "right", "down_right", "down_left", "left" ]
	interface TransitionFloor {
		floor: number,
		position: TransitionPosition,
		type: string,
		block: {
			name: string,
			position: TransitionPosition,
			floor: number,
		},
	}
	interface Transition {
		from: {
			block_name: string,
			floor: number,
			position: TransitionPosition
		},
		to: {
			block_name: string,
			floor: number,
			position: TransitionPosition
		}
	}
	interface Block {
		name: string,
		direction: "up" | "right" | "down" | "left",
		pos_x?: number,
		pos_y?: number,
		layer?: number,
		min_floor?: number,
		max_floor?: number,
	}
	const block_full_cell = 380


	export class Gigacluster extends $hyoo_crus_home.with( {
		Blocks: $hyoo_crus_list_ref_to( () => $apxutechtop_samosbor_map_block_data ),
	} ) {
		@$mol_mem
		static global() {
			// const storage = $hyoo_crus_glob.home( Gigacluster ) // home для каждого юзера свой
			// const ref = storage.ref().description
			// console.log( "global ref:", ref )
			const storage = $hyoo_crus_glob.Node( $hyoo_crus_ref( "6H1qbbnb_3nEGhBiI" ), Gigacluster ) // используем мой home
			return storage
		}
		@$mol_action
		static create_block() {
			const block = this.global().Blocks( null )?.make( { '': $hyoo_crus_rank_post( "just" ) } )
			console.log( "created", block )
			return block
		}
		@$mol_action
		static delete_block( ref: any ) {
			// TODO пройтись по соединениям и удалить их
			const block = $hyoo_crus_glob.Node( ref, $apxutechtop_samosbor_map_block_data )
			block.transitions()?.forEach( ( transition ) => {
				const connected_block_ref = transition.get_connected_block( ref )
				if( !connected_block_ref ) return
				const connected_block = $hyoo_crus_glob.Node( connected_block_ref, $apxutechtop_samosbor_map_block_data )
				connected_block.transitions()?.forEach( ( connected_transition ) => {
					if( connected_transition.get_connected_block( connected_block_ref ) === ref ) {
						connected_block.Transitions( null )?.cut( connected_transition.ref() )
					}
				} )
			} )
			this.global().Blocks( null )?.cut( ref )
		}
		@$mol_action
		static delete_all_blocks() {
			this.blocks()?.map( ( node ) => this.delete_block( node.ref() ) )
		}
		@$mol_mem
		static blocks() {
			return this.global().Blocks( null )?.remote_list()
		}
		@$mol_mem_key
		static block( block_name: string ) {
			return this.global().Blocks( null )?.remote_list().find( ( block ) => block.name() === block_name )
		}
		static transition( block_name: string, floor: number, position: TransitionPosition ) {
			return this.block( block_name )?.transitions()?.find( ( trans ) => {
				const check = ( port: TransitionPort | undefined | null ) => {
					if( !port ) return
					const block_ref = port.Block( null )?.val()
					if( !block_ref ) return
					const name = $hyoo_crus_glob.Node( block_ref, $apxutechtop_samosbor_map_block_data ).name()
					if( name === block_name && Number( port.Floor( null )?.val() ) === floor && port.Position( null )?.val() === position ) {
						return true
					}
				}
				if( check( trans.From( null ) ) || check( trans.To( null ) ) ) {
					return true
				}
			} )
		}
	}


	export class $apxutechtop_samosbor_map_storage extends $mol_object {
		@$mol_mem
		static data( next?: { blocks: Block[], transitions: Transition[] } ) {
			const data: {
				blocks: Block[],
				transitions: Transition[]
			} = {
				blocks: [ {
					name: "Л-96",
					direction: "up",
				}, {
					name: "Л-81",
					direction: "right",
					pos_x: 2,
				}, {
					name: "Ф-76",
					direction: "left",
					pos_x: -1,
				}, {
					name: "А-21",
					direction: "up",
					pos_x: -1,
					pos_y: -1,
					layer: 3,
					min_floor: -4,
					max_floor: 6,
				} ],
				transitions: [
					{
						from: {
							block_name: "Л-96",
							floor: 1,
							position: "right",
						},
						to: {
							block_name: "Л-81",
							floor: 0,
							position: "down_left",
						}
					},
					{
						from: {
							block_name: "Л-96",
							floor: 2,
							position: "left"
						},
						to: {
							block_name: "Ф-76",
							floor: 0,
							position: "down_right",
						}
					},
					{
						from: {
							block_name: "Л-96",
							floor: 1,
							position: "up_left"
						},
						to: {
							block_name: "А-21",
							floor: 0,
							position: "down_right"
						}
					}
				],
			}
			return next ?? data
		}
		static blocks( next?: Block[] ) {
			const blocks = next ?? this.data().blocks
			this.data( { blocks, transitions: this.transitions() } )
			return blocks
		}
		static block( block_name: string, next?: Block ) {}
		static block_direction( block_name: string ) {}
		static transitions( next?: Transition[] ) {
			const transitions = next ?? this.data().transitions
			this.data( { blocks: this.blocks(), transitions: transitions } )
			return transitions
		}
	}
	export class $apxutechtop_samosbor_map_app extends $.$apxutechtop_samosbor_map_app {

		@$mol_mem
		map_land() {
			return Gigacluster.global().land()
		}
		@$mol_mem
		static blocks_data( next?: Block[] ) {
			console.log( "blocks_data" )
			return next ? $apxutechtop_samosbor_map_storage.data( { blocks: next, transitions: $apxutechtop_samosbor_map_storage.data().transitions } ).blocks : $apxutechtop_samosbor_map_storage.data().blocks
		}

		@$mol_mem
		selected_block( next?: $.$apxutechtop_samosbor_map_block | null ) {
			return next
		}

		@$mol_mem_key
		block_clicked( ref: any, event: any ) {
			console.log( ref, event )
			this.selected_block()?.selected( false )
			if( this.selected_block() == this.Block( ref ) ) {
				this.selected_block( null )
			} else {
				this.selected_block( this.Block( ref ) )
				this.selected_block()?.selected( true )
			}
		}
		// @$mol_mem_key
		// min_floor(block_name: string, next?: number): number {
		// 	return 
		// }

		@$mol_mem
		min_floor( next?: number ): number {
			return this.selected_block()?.min_floor( next ) ?? 0
		}
		@$mol_mem
		max_floor( next?: number ): number {
			return this.selected_block()?.max_floor( next ) ?? 0
		}
		@$mol_mem
		layer_value( next?: number ): number {
			return this.selected_block()?.block_layer( next ) ?? 0
		}
		@$mol_mem
		pos_x_value( next?: number ): number {
			return this.selected_block()?.pos_x( next ) ?? 0
		}
		@$mol_mem
		pos_y_value( next?: number ): number {
			return this.selected_block()?.pos_y( next ) ?? 0
		}
		@$mol_mem
		direction_value( next?: DirectionType ) {
			if( next?.length == 0 ) {
				return this.selected_block()?.block_direction() ?? ""
			}
			return this.selected_block()?.block_direction( next ) ?? ""
		}
		@$mol_mem
		block_type_value( next?: string ) {
			if( next?.length == 0 ) {
				return this.selected_block()?.block_type() ?? ""
			}
			return this.selected_block()?.block_type( next ) ?? ""
		}
		@$mol_mem
		up_flight_value( next?: boolean ): boolean {
			return this.selected_block()?.is_up_flight( next ) ?? false
		}
		@$mol_mem
		down_flight_value( next?: boolean ): boolean {
			return this.selected_block()?.is_down_flight( next ) ?? false
		}
		@$mol_action
		delete_block() {
			Gigacluster.delete_block( this.selected_block()?.block_data().ref() )
		}
		@$mol_mem
		selected_block_name( next?: string ) {
			return this.selected_block()?.block_name( next ) ?? ""
		}

		@$mol_mem_key
		static block( name: string, next?: Block ) {
			return Gigacluster.block( name )
			return next ?? this.blocks_data().find( ( block ) => block.name === name )!
		}
		@$mol_mem_key
		block( ref: any, next?: Block ) {
			const block_node = $hyoo_crus_glob.Node( ref, $apxutechtop_samosbor_map_block_data )
			console.log( block_node )
			return block_node
			// return Gigacluster.block(name)
			// return $apxutechtop_samosbor_map_app.block(name, next)!
		}
		@$mol_mem_key
		block_transitions( block_name: string ) {
			return $apxutechtop_samosbor_map_app.all_transitions().filter( ( { from, to } ) => {
				const check = ( t: { block_name: any; floor: any; position: any } ) => {
					return t.block_name === block_name
				}
				return check( from ) || check( to )
			} ).map( ( { from, to } ) => from.block_name === block_name ? { from, to } : { from: to, to: from } )
			//return this.block(block_name).transitionFloors
		}
		@$mol_mem
		static all_transitions( next?: Transition[] ) {
			console.log( next )
			return $apxutechtop_samosbor_map_storage.transitions( next )
		}
		@$mol_mem_key
		static transition( trans_id: string, next?: Transition ): Transition | undefined {
			const { block_name, floor_num, position } = this.parseTrans( trans_id )!
			console.log( this.all_transitions() )
			const transition = this.all_transitions().find( ( { from, to } ) => {
				const check = ( t: { block_name: string; floor: number; position: string } ) => {
					console.log( t )
					return t.block_name === block_name && t.floor === floor_num && t.position === position
				}
				return check( from ) || check( to )
			} )
			console.log( trans_id, transition )
			return next ?? transition
			//return (({from, to}) => from.block_name === block_name ? {from, to} : {from: to, to: from})(transition)
		}
		@$mol_mem
		transitions() {
			const transitions: $mol_view[] = []
			for( const block of Gigacluster.blocks() ?? [] ) {
				for( const transition of block.transitions() ?? [] ) {
					const trans_view = this.Transition( transition.ref() )
					transitions.push( trans_view )
				}
			}
			return transitions
		}
		@$mol_mem_key
		transition_direction( ref: any ): string {
			const node = $hyoo_crus_glob.Node( ref, TransitionData )
			const block_ref = node.From( null )?.Block( null )?.val()
			const block = this.block( block_ref )
			const absolute_direction = $apxutechtop_samosbor_map_app.absolute_direction( block.direction(), node.From( null )?.Position( null )?.val()! )
			if( absolute_direction === "down" || absolute_direction === "up" ) {
				return "horizontal"
			} else {
				return "vertical"
			}
		}
		@$mol_mem_key
		transition_left( ref: any ): number {
			const node = $hyoo_crus_glob.Node( ref, TransitionData )
			const block_ref = node.From( null )?.Block( null )?.val()
			const block = this.block( block_ref )
			const offset = $apxutechtop_samosbor_map_app.getOffset( node.From( null )?.Position( null )?.val()!, block.direction() )
			const left = block.pos_x() * block_full_cell + offset.x
			return left
		}
		@$mol_mem_key
		transition_top( ref: any ): number {
			const node = $hyoo_crus_glob.Node( ref, TransitionData )
			const block_ref = node.From( null )?.Block( null )?.val()
			const block = this.block( block_ref )
			const offset = $apxutechtop_samosbor_map_app.getOffset( node.From( null )?.Position( null )?.val()!, block.direction() )
			const top = block.pos_y() * block_full_cell + offset.y
			return top
		}
		static next_direction( dir: DirectionType ): DirectionType {
			const directions: DirectionType[] = [ 'up', 'right', 'down', 'left' ]
			const currentIndex = directions.indexOf( dir )
			const nextIndex = ( currentIndex + 1 ) % directions.length
			return directions[ nextIndex ]
		}
		static prev_direction( dir: DirectionType ): DirectionType {
			const directions: DirectionType[] = [ 'up', 'right', 'down', 'left' ]
			const currentIndex = directions.indexOf( dir )
			const nextIndex = ( currentIndex - 1 + directions.length ) % directions.length
			return directions[ nextIndex ]
		}
		static next_position( pos: TransitionPosition ) {
			const current_index = TransitionPositions.indexOf( pos )
			const next_index = ( current_index + 1 ) % TransitionPositions.length
			return TransitionPositions[ next_index ]
		}
		@$mol_mem
		show_connections(): boolean {
			return this.control_type() === "create" || this.control_type() === "connect"
		}
		@$mol_mem
		control_type( next?: string ) {
			return next ?? ""
		}
		@$mol_mem
		is_create_mode() {
			return this.control_type() === "create"
		}
		@$mol_mem
		is_configure_mode(): boolean {
			return this.control_type() === "configure"
		}
		@$mol_mem
		is_connect_mode() {
			return this.control_type() === "connect"
		}
		@$mol_action
		static rotate_block( block_name: string ) {
			console.log( "rotate" )
			const block_data = this.block( block_name )
			const new_direction = this.prev_direction( this.direction( block_name ) )
			return new_direction
		}

		static rotate_transition( transition: Transition ): { transition: Transition, direction: DirectionType, offset: { x: number, y: number } } {
			const rotate_map: { [ pos in TransitionPosition ]?: boolean } = {
				up_right: true,
				right: true,
				down_left: true,
				left: true,
			}
			const new_direction = rotate_map[ transition.to.position ] ? this.rotate_block( transition.to.block_name ) : this.direction( transition.to.block_name )
			const rotate_offset: { [ pos in TransitionPosition ]: { x: number, y: number } } = {
				up_left: { x: -1, y: 0 },
				up_middle: { x: 1, y: 0 },
				up_right: { x: 1, y: 0 },
				right: { x: 0, y: 0 },
				down_right: { x: -1, y: 0 },
				down_middle: { x: 1, y: 0 },
				down_left: { x: 1, y: 0 },
				left: { x: 0, y: 0 },
			}
			const rotated_offset = this.rotateOffset( rotate_offset[ transition.to.position ], this.direction( transition.to.block_name ) )
			const block = this.block( transition.to.block_name )

			transition.to.position = this.next_position( transition.to.position )
			return { transition, direction: new_direction, offset: rotated_offset }
		}
		@$mol_mem_key
		parseFloor( floorId: string ) {
			const regex = /^([^_]+)_(\d+)$/ // `${block_name}_${floor_num}`
			const match = floorId.match( regex )
			if( match ) {
				const [ _, block_name, floor_num_str ] = match
				const floor_num = parseInt( floor_num_str, 10 )
				return { block_name, floor_num }
			}
			return null // если не удалось распарсить
		}
		@$mol_mem_key
		static parseTrans( transId: string ) {
			console.log( transId )
			const regex = /^([^_]+)_(-?\d+)_(.+)$/ // `${block_name}_${floor_num}_${position}`
			const match = transId.match( regex )
			console.log( match )
			if( match ) {
				const [ _, block_name, floor_num_str, position ] = match
				const floor_num = parseInt( floor_num_str, 10 )
				return { block_name, floor_num, position: position as TransitionPosition }
			}
			return null // если не удалось распарсить
		}
		@$mol_mem_key
		block_name( floorId: string ) {
			return this.parseFloor( floorId )?.block_name!
		}
		@$mol_mem_key
		floor_num( floorId: string ) {
			return this.parseFloor( floorId )?.floor_num!
		}

		@$mol_mem_key
		static direction( block_name: string, next?: DirectionType ): DirectionType {
			console.log( block_name )
			return "up"
			//return next ?? this.block( block_name ).direction
		}
		@$mol_mem_key
		floor_direction( floorId: string ) {
			return $apxutechtop_samosbor_map_app.direction( this.block_name( floorId ) )
		}

		@$mol_mem_key
		floor_cluster( floorId: string, cluster?: any ) {

		}

		// Функция для получения смещения точки перехода
		static getOffset( pos: TransitionPosition, dir: string ) {
			const w = 760
			const h = 380
			const slotOffset = () => {
				const pos_map: { [ k in TransitionPosition ]: { x: number, y: number } } = {
					up_left: { x: w / 4, y: 0 },
					up_middle: { x: w / 2, y: 0 },
					up_right: { x: w - w / 4, y: 0 },
					right: { x: w, y: h / 2 },
					down_right: { x: w - w / 4, y: h },
					down_middle: { x: w / 2, y: h },
					down_left: { x: w / 4, y: h },
					left: { x: 0, y: h / 2 },
				}
				return pos_map[ pos ]
			}
			const rotateOffset = ( { x, y }: { x: number, y: number }, dir: string ) => {
				const angle = { up: 0, right: 90, down: 180, left: 270 }[ dir ]!
				const radians = angle / 180 * Math.PI
				const cosA = Math.cos( radians )
				const sinA = Math.sin( radians )
				return {
					x: x * cosA - y * sinA,
					y: x * sinA + y * cosA,
				}
			}
			const dirOffset = ( dir: string ) => {
				return { up: { x: 0, y: 0 }, right: { x: h, y: 0 }, down: { x: w, y: h }, left: { x: 0, y: w } }[ dir ]!
			}
			const directionOffset = dirOffset( dir )
			const rotatedOffset = rotateOffset( slotOffset(), dir )
			return { x: rotatedOffset.x + directionOffset.x, y: rotatedOffset.y + directionOffset.y }
		}
		static rotateOffset( { x, y }: { x: number, y: number }, dir: string ) {
			const angle = { up: 0, right: 90, down: 180, left: 270 }[ dir ]!
			const radians = angle / 180 * Math.PI
			const cosA = Math.cos( radians )
			const sinA = Math.sin( radians )
			return {
				x: Math.round( x * cosA - y * sinA ),
				y: Math.round( x * sinA + y * cosA ),
			}
		}
		static getPositionOffset( pos: TransitionPosition, dir: DirectionType ) {
			const offsets: { [ pos in TransitionPosition ]: { x: number, y: number } } = {
				up_left: { x: 0, y: 0 },
				up_middle: { x: 0.5, y: 0 },
				up_right: { x: 1, y: 0 },
				right: { x: 2, y: 0 },
				down_right: { x: 1, y: 1 },
				down_middle: { x: 0.5, y: 1 },
				down_left: { x: 0, y: 1 },
				left: { x: -1, y: 0 },
			}
			const dirOffset = ( dir: string ) => {
				return { x: 0, y: 0 }
				return { up: { x: 0, y: 0 }, right: { x: 1, y: 0 }, down: { x: 1, y: 1 }, left: { x: 0, y: 1 } }[ dir ]!
			}
			const directionOffset = dirOffset( dir )
			const rotatedOffset = this.rotateOffset( offsets[ pos ], dir )
			return { x: rotatedOffset.x + directionOffset.x, y: rotatedOffset.y + directionOffset.y }
		}
		@$mol_mem_key
		calculateOffset( transition: Transition, floor_direction: string ) {
			const currentOffset = $apxutechtop_samosbor_map_app.getOffset( transition.from.position, floor_direction )
			const anotherOffset = $apxutechtop_samosbor_map_app.getOffset( transition.to.position, $apxutechtop_samosbor_map_app.direction( transition.to.block_name ) )
			return { x: currentOffset.x - anotherOffset.x, y: currentOffset.y - anotherOffset.y }
		}

		@$mol_action
		set_position( view: $mol_view, pos: { left: number, top: number } ) {
			const prev = view.dom_node().getAttribute( "style" )
			view.style().top = `${ pos.top }px`
			view.style().left = pos.left + "px"
			view.dom_node().setAttribute( "style", `${ "" } top: ${ `${ pos.top }px` }; left: ${ `${ pos.left }px` };` )
		}
		@$mol_action
		set_size( view: $mol_view, width: number, height: number ) {
			const prev = view.dom_node().getAttribute( "style" )
			view.dom_node().setAttribute( "style", `${ prev } width: ${ width }; height: ${ height };` )
		}

		get_size( cluster: $mol_view ) {
			return cluster.view_rect()
		}

		@$mol_action
		event_key( transId: string, event: any ) {
			const { block_name, floor_num, position } = $apxutechtop_samosbor_map_app.parseTrans( transId )!
			const floorId = this.get_floor_id( block_name, floor_num )
			const block = $apxutechtop_samosbor_map_app.block( block_name )
			if( !block ) {
				throw new Error( `Not find block: ${ block_name }` )
			}
			// если есть переход ничего не делаем
			const rotateBlock = ( { name, position, floor }:
				{ name: string, position: TransitionPosition, floor: number },
				trans: TransitionFloor ) => {
				const block = $apxutechtop_samosbor_map_app.block( name )
				console.log( "rotating" )
				trans.position = TransitionPositions[ ( TransitionPositions.indexOf( trans.position ) + 1 ) % ( TransitionPositions.length - 1 ) ]
				//this.transition(transId, trans)
			}
			let trans = $apxutechtop_samosbor_map_app.transition( transId )
			const index = $apxutechtop_samosbor_map_app.all_transitions().findIndex( ( t ) => trans )
			console.log( transId, trans )
			if( trans ) {
				//this.rotate_block(trans.to.block_name)
				const all_transitions = $apxutechtop_samosbor_map_app.all_transitions()
				console.log( "before", all_transitions.map( ( v ) => v.to.position ) )
				const { transition: rotated_transition } = $apxutechtop_samosbor_map_app.rotate_transition( trans )
				//this.transition(transId, )

				all_transitions[ index ] = rotated_transition
				console.log( "after", all_transitions.map( ( v ) => v.to.position ) )
				$apxutechtop_samosbor_map_app.all_transitions( all_transitions )
				//rotateBlock( trans.block, trans )
			} else {
				const new_block_name = `new-${ Math.floor( Math.random() * 100 ) }`
				const new_transition: Transition = {
					from: {
						block_name,
						floor: floor_num,
						position: position
					},
					to: {
						block_name: new_block_name,
						position: "up_left",
						floor: 0,
					}
				}
				const new_block: Block = {
					name: new_block_name,
					direction: $apxutechtop_samosbor_map_app.next_direction( $apxutechtop_samosbor_map_app.next_direction( $apxutechtop_samosbor_map_app.absolute_direction( $apxutechtop_samosbor_map_app.direction( block_name ), position ) ) ),
				}

				$apxutechtop_samosbor_map_app.all_transitions( [ ...$apxutechtop_samosbor_map_app.all_transitions(), new_transition ] )
				console.log( $apxutechtop_samosbor_map_app.blocks_data( [ ...$apxutechtop_samosbor_map_app.blocks_data(), new_block ] ) )
			}
			//floors.push( newTransition )
			console.log( floorId, position, event )
		}

		@$mol_mem_key
		floor_lines( floorId: any, next?: readonly ( any )[] ): readonly ( any )[] {
			console.log( "floor_lines" )
			const lines: $mol_view[] = []
			const padding = 25
			const adjustments: Record<"up" | "down" | "left" | "right", { x: number; y: number }> = {
				up: { x: 0, y: padding },
				down: { x: 0, y: -padding },
				left: { x: padding, y: 0 },
				right: { x: -padding, y: 0 },
			}
			for( const position of TransitionPositions ) {
				const lineOffset = $apxutechtop_samosbor_map_app.getOffset( position, this.floor_direction( floorId ) )
				const line = this.Line( floorId + "_" + position )
				const abs_dir = $apxutechtop_samosbor_map_app.absolute_direction( $apxutechtop_samosbor_map_app.direction( this.block_name( floorId ) ), position )
				const adjustment = adjustments[ abs_dir ] ?? { x: 0, y: 0 }
				const adjustedOffset = {
					x: lineOffset.x + adjustment.x,
					y: lineOffset.y + adjustment.y
				}
				this.set_position( line, { left: adjustedOffset.x, top: adjustedOffset.y } )
				lines.push( line )
				//const lines = this.floor_lines(floorId)
				//this.floor_lines(floorId, [...lines, line])
			}
			return lines
		}

		@$mol_mem_key
		get_floor_id( block_name: string, floor_num: number ) {
			return `${ block_name }_${ floor_num }`
		}
		static get_trans_id( { block_name = "", floor = 0, position = "" } ) {
			return `${ block_name }_${ floor }_${ position }`
		}

		static absolute_direction( direction: DirectionType, position: TransitionPosition ): DirectionType {
			const dirMap = { up: 0, right: 1, down: 2, left: 3 }
			const posMap: { [ key in TransitionPosition ]: number } = {
				"up_left": 0, "up_middle": 0, "up_right": 0, "right": 1,
				"down_right": 2, "down_middle": 2, "down_left": 2, "left": 3
			}
			const directions: DirectionType[] = [ "up", "right", "down", "left" ]
			return directions[
				( posMap[ position ] + dirMap[ direction as keyof typeof dirMap ] ) % 4
			]
		}

		@$mol_mem
		blocks() {
			const blocks: $mol_view[] = []
			const block_nodes = Gigacluster.blocks()
			console.log( block_nodes )
			for( const block_data of block_nodes ?? [] ) {
				const block_view = this.Block( block_data.land_ref() )
				blocks.push( block_view )
			}

			return blocks
		}

		// @$mol_mem
		// clusters( next?: $mol_view[] ): $mol_view[] {
		// 	console.log( "clusters" )
		// 	const clusters: $mol_view[] = []
		// 	const visited: { [ id: string ]: boolean } = {}
		// 	const positions: { [ id: string ]: { top: number; left: number } } = {}
		// 	// Рекурсивная функция для обхода связанных этажей
		// 	const traverseCluster = (
		// 		floorId: string,
		// 		cluster: $mol_view[],
		// 		startPos: { top: number; left: number }
		// 	) => {
		// 		if( visited[ floorId ] ) return
		// 		visited[ floorId ] = true

		// 		const floor = this.Floor( floorId )
		// 		//this.set_position( floor, startPos )
		// 		this.pos_x( floorId, startPos.left )
		// 		this.pos_y( floorId, startPos.top )
		// 		cluster.push( floor )
		// 		//cluster.sub( [ ...cluster.sub(), floor ] )



		// 		//const [ blockName, floorNum ] = floorId.split( '-' )
		// 		const blockName = this.block_name( floorId )
		// 		const floorNum = this.floor_num( floorId )

		// 		for( const transition of $apxutechtop_samosbor_map_app.all_transitions().filter( ( { from, to } ) => {
		// 			const check = ( t: { block_name: any; floor: any; position: any } ) => {
		// 				return t.block_name === blockName
		// 			}
		// 			return check( from ) || check( to )
		// 		} ).map( ( { from, to } ) => from.block_name === blockName ? { from, to } : { from: to, to: from } ).filter(
		// 			( { from, to } ) => from.floor === floorNum
		// 		) ) {
		// 			//const transition = this.transition(trans_id)!
		// 			const targetFloorId = this.get_floor_id( transition.to.block_name, transition.to.floor )
		// 			const offset = this.calculateOffset( transition, $apxutechtop_samosbor_map_app.direction( blockName ) )


		// 			const currentPos = positions[ floorId ] || { top: 0, left: 0 }
		// 			const newPos = {
		// 				top: currentPos.top + offset.y,
		// 				left: currentPos.left + offset.x
		// 			}
		// 			positions[ targetFloorId ] = newPos

		// 			if( !visited[ targetFloorId ] ) {
		// 				traverseCluster( targetFloorId, cluster, newPos )
		// 			}
		// 		}
		// 	}
		// 	const gigaCluster: {
		// 		pos: { x: number, y: number },
		// 		size: { x: number, y: number },
		// 		padding: number,
		// 	} = {
		// 		pos: { x: 0, y: 0 },
		// 		size: { x: 0, y: 0 },
		// 		padding: 300,
		// 	}

		// 	for( const block of $apxutechtop_samosbor_map_app.blocks_data() ) {
		// 		for( const transition of $apxutechtop_samosbor_map_app.all_transitions().filter( ( { from, to } ) => {
		// 			const check = ( t: { block_name: any; floor: any; position: any } ) => {
		// 				return t.block_name === block.name
		// 			}
		// 			return check( from ) || check( to )
		// 		} ).map( ( { from, to } ) => from.block_name === block.name ? { from, to } : { from: to, to: from } ) ) {
		// 			//const transition = this.transition(trans_id)!
		// 			const floorId = this.get_floor_id( block.name, transition.from.floor )
		// 			if( !visited[ floorId ] ) {

		// 				const cluster_floors: $mol_view[] = []
		// 				traverseCluster( floorId, cluster_floors, { top: 0, left: 0 } )
		// 				const cluster = this.Cluster( cluster_floors )
		// 				cluster.floors( cluster_floors )
		// 				const dir = $apxutechtop_samosbor_map_app.absolute_direction( this.floor_direction( floorId ), transition.from.position )
		// 				// распололжить новый кластер относительно гигакластера которому принадлежит блок по нарпавлению dir (up, right, down, left)

		// 				// вычислить позицию и размеры кластера
		// 				const rect = this.get_size( cluster )

		// 				if( !rect ) {
		// 					return []
		// 				}
		// 				// сохранить размер и позицию объединения кластера с гигакластером
		// 				let newX = gigaCluster.pos.x
		// 				let newY = gigaCluster.pos.y

		// 				switch( dir ) {
		// 					case 'right':
		// 						newX = gigaCluster.pos.x + gigaCluster.size.x + gigaCluster.padding
		// 						newY = gigaCluster.pos.y
		// 						gigaCluster.size.x += rect.width + gigaCluster.padding
		// 						break
		// 					case 'left':
		// 						newX = gigaCluster.pos.x - rect.width - gigaCluster.padding
		// 						newY = gigaCluster.pos.y
		// 						gigaCluster.size.x += rect.width + gigaCluster.padding
		// 						gigaCluster.pos.x = newX
		// 						break
		// 					case 'down':
		// 						newX = gigaCluster.pos.x
		// 						newY = gigaCluster.pos.y + gigaCluster.size.y + gigaCluster.padding
		// 						gigaCluster.size.y += rect.height + gigaCluster.padding
		// 						break
		// 					case 'up':
		// 						newX = gigaCluster.pos.x
		// 						newY = gigaCluster.pos.y - rect.height - gigaCluster.padding
		// 						gigaCluster.size.y += rect.height + gigaCluster.padding
		// 						gigaCluster.pos.y = newY
		// 						break
		// 				}

		// 				// Установка позиции кластера
		// 				//this.set_position( cluster, { left: newX, top: newY } )
		// 				this.cluster_pos_x( cluster_floors, newX )
		// 				this.cluster_pos_y( cluster_floors, newY )
		// 				//this.set_size( cluster, rect.width, rect.height )

		// 				// Обновление размеров гигакластера
		// 				gigaCluster.size.x = Math.max( gigaCluster.size.x, rect.width )
		// 				gigaCluster.size.y = Math.max( gigaCluster.size.y, rect.height )

		// 				clusters.push( cluster )
		// 			}

		// 		}
		// 	}
		// 	console.log( clusters.toString() )
		// 	return next ?? clusters
		// }
	}
}
