namespace $.$$ {

	export class $apxu_samosbor_map_app extends $.$apxu_samosbor_map_app {

		@$mol_mem
		current_map() {
			return $apxu_samosbor_map_storage.current()
		}
		@$mol_mem
		gigacluster() {
			return this.current_map().gigacluster()!
		}
		@$mol_mem
		gigacluster_land() {
			return this.gigacluster()?.land()
		}
		@$mol_mem
		is_editor() {
			const role = this.current_map().roles().lord_role( this.$.$hyoo_crus_auth.current().public().toString() )
			return role === "cartographer" || role === "researcher" || this.is_admin() // TODO
		}
		@$mol_mem
		role_controller_visible(): readonly ( any )[] {
			if( this.is_admin() ) {
				return [ this.RolesController() ]
			}
			return []
		}
		@$mol_mem
		control_panel_visible(): readonly ( any )[] {
			return this.is_editor() || this.is_admin() ? [ this.Control_Panel() ] : []
		}
		@$mol_mem
		is_admin() {
			return $apxu_samosbor_map_storage.global().ref() === this.$.$hyoo_crus_auth.current().lord()
		}
		@$mol_action
		add_public_key( e?: any ) {
			const pub_key = this.pub_key_value()
			this.current_map().roles().add_key( pub_key )
		}
		// @$mol_mem
		// lords() {
		// 	const roles = Roles.global().get_roles()
		// 	const lords = roles.map( ( role ) => {
		// 		return this.Lord( role )
		// 	} )
		// 	return lords
		// }

		@$mol_mem
		lord_selects() {
			const roles = this.current_map().roles()

			return roles.get_rights()!.map( ( right ) => {
				return this.LordRole( right.key() )
			} )
		}

		@$mol_mem_key
		lord_role_value( pub_key: string, next?: typeof $apxu_samosbor_map_role.options[ number ] ): string {
			const role = this.current_map().roles().lord_role( pub_key, next ) ?? "no_role"
			console.log( role )
			return role
		}

		@$mol_mem_key
		lord_ref_value( pub_key: string ): string {
			return $hyoo_crus_auth.from( pub_key ).lord().description!
		}
		@$mol_mem_key
		lord_description( pub_key: string, next?: string ): string {
			return this.current_map().roles().lord_rights( pub_key )?.description( next ) ?? ""
		}
		// @$mol_mem_key
		// lord_name( role: RoleInfo, next?: string ): string {
		// 	return role.Name( null )?.val( next ) ?? ""
		// }
		// @$mol_mem_key
		// lord_key( role: RoleInfo ): string {
		// 	return role.Key( null )?.val() ?? ""
		// }
		// @$mol_mem_key
		// gift_rank( role: RoleInfo, next?: keyof typeof $hyoo_crus_rank_tier ): string {
		// 	const role_rank = role.Rank( null )?.val( next ? BigInt( $hyoo_crus_rank_make( next, 'just' ) ) : undefined )
		// 	if( role_rank == null ) {
		// 		return "post"
		// 	}
		// 	const rank = Number( role_rank )
		// 	if( next ) {
		// 	}
		// 	return $hyoo_crus_rank_tier[ ( next ? $hyoo_crus_rank_make( next, 'just' ) : rank ) & 0b0_1111_0000 ]
		// }

		@$mol_mem
		public_key() {
			return this.$.$hyoo_crus_auth.current().public().toString()
		}

		@$mol_mem
		selected_block( next?: $.$apxu_samosbor_map_block | null ) {
			return next
		}

		@$mol_mem
		selected_blocks( next?: symbol[] ) {
			return next ?? []
		}

		@$mol_mem_key
		block_selected( ref: symbol ) {
			return this.selected_blocks().includes( ref )
		}

		@$mol_action
		block_clicked( ref: symbol, event: any ) {
			const ref_str = ref.description ?? ""
			console.log( ref_str, event )
			const block = this.Block( ref )
			const selected_blocks = this.selected_blocks()
			if( this.block_selected( ref ) ) {
				this.selected_blocks( selected_blocks.filter( ( r ) => r !== ref ) )
			} else {
				this.selected_blocks( [ ...selected_blocks, ref ] )
			}
			console.log( this.selected_blocks() )
		}

		@$mol_mem
		block_cards() {
			const cards = this.selected_blocks().map( ( ref ) => {
				return this.BlockCard( ref )
			} )
			return cards
		}

		@$mol_mem
		gen_floor( next?: number ) {
			return this.selected_block()?.generator_floor_value( next ) ?? 0
		}

		@$mol_mem_key
		min_floor( ref: symbol, next?: number ): number {
			const block = this.Block( ref )
			return block.min_floor( next ) ?? 0
		}
		@$mol_mem_key
		max_floor( ref: symbol, next?: number ): number {
			const block = this.Block( ref )
			return block.max_floor( next ) ?? 0
		}
		@$mol_action
		close_click( ref: symbol, event?: any ) {
			this.selected_blocks( [ ...this.selected_blocks().filter( ( r ) => r !== ref ) ] )
		}
		@$mol_mem_key
		layer_value( ref: symbol, next?: number ): number {
			const block = this.Block( ref )
			return block.block_layer( next ) ?? 0
		}
		@$mol_mem_key
		pos_x_value( ref: symbol, next?: number ): number {
			const block = this.Block( ref )
			return block.pos_x( next ) ?? 0
		}
		@$mol_mem_key
		pos_y_value( ref: symbol, next?: number ): number {
			const block = this.Block( ref )
			return block.pos_y( next ) ?? 0
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
		@$mol_action
		delete_block() {
			this.gigacluster()?.delete_block( this.selected_block()?.block_data().ref() )
		}
		@$mol_mem_key
		selected_block_name( ref: symbol, next?: string ) {
			const block = this.Block( ref )
			return block.block_name( next ) ?? ""
		}

		@$mol_mem_key
		static block( ref: any ) {
			const block_node = $hyoo_crus_glob.Node( ref, $apxu_samosbor_map_block_data )
			return block_node
		}
		@$mol_mem_key
		block( ref: any ) {
			return $apxu_samosbor_map_app.block( ref )
		}
		@$mol_mem
		transitions() {
			const transitions: $mol_view[] = []
			for( const block of this.current_map()?.blocks() ?? [] ) {
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
			const absolute_direction = $apxu_samosbor_map_app.absolute_direction( block.direction(), node.From( null )?.Position( null )?.val()! )
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
			const offset = $apxu_samosbor_map_app.getOffset( node.From( null )?.Position( null )?.val()!, block.direction() )
			const left = block.pos_x() * block_full_cell + offset.x
			return left
		}
		@$mol_mem_key
		transition_top( ref: any ): number {
			const node = $hyoo_crus_glob.Node( ref, TransitionData )
			const block_ref = node.From( null )?.Block( null )?.val()
			const block = this.block( block_ref )
			const offset = $apxu_samosbor_map_app.getOffset( node.From( null )?.Position( null )?.val()!, block.direction() )
			const top = block.pos_y() * block_full_cell + offset.y
			return top
		}
		static next_direction( dir: DirectionType, next = 1 ): DirectionType {
			const directions: DirectionType[] = [ 'up', 'right', 'down', 'left' ]
			const currentIndex = directions.indexOf( dir )
			const nextIndex = ( currentIndex + next ) % directions.length
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
				up_left: { x: 0, y: -1 },
				up_middle: { x: 0.5, y: -1 },
				up_right: { x: 1, y: -1 },
				right: { x: 2, y: 0 },
				down_right: { x: 1, y: 1 },
				down_middle: { x: 0.5, y: 1 },
				down_left: { x: 0, y: 1 },
				left: { x: -2, y: 0 },
			}
			const dirOffset = ( dir: string ) => {
				return { x: 0, y: 0 }
				return { up: { x: 0, y: 0 }, right: { x: 1, y: 0 }, down: { x: 1, y: 1 }, left: { x: 0, y: 1 } }[ dir ]!
			}
			const directionOffset = dirOffset( dir )
			const rotatedOffset = this.rotateOffset( offsets[ pos ], dir )
			return { x: rotatedOffset.x + directionOffset.x, y: rotatedOffset.y + directionOffset.y }
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

		@$mol_mem_key
		block_view( ref: symbol ) {
			return this.Block( ref )
		}

		@$mol_mem
		blocks() {
			const blocks: $mol_view[] = []
			const block_nodes = this.current_map().blocks()
			for( const block_data of block_nodes ?? [] ) {
				const block_view = this.Block( block_data.land_ref() )
				blocks.push( block_view )
			}

			return blocks
		}

		@$mol_mem
		current_layer( next?: number ): number {
			const str_layer = $mol_state_arg.value( "layer", next !== undefined ? next.toString() : undefined )
			const parsed_layer = next ?? ( str_layer ? parseInt( str_layer ) : undefined )
			return parsed_layer ?? 0
		}

		// @$mol_mem
		// test_translate() {
		// 	return `${this.test_pan()[0]}px ${this.test_pan()[1]}px`
		// }
	}
}
