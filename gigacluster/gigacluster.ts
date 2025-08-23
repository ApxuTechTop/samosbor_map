namespace $ {

	export class $apxu_samosbor_map_gigacluster extends ( $hyoo_crus_dict.with( {
		Blocks: $hyoo_crus_list_ref_to( () => $apxu_samosbor_map_block_data ),
	} ) ) {
		// @$mol_mem
		// static is_admin() {
		// 	return this.global().ref() === this.$.$hyoo_crus_auth.current().lord()
		// }
		// @$mol_mem
		// static global() {
		// 	// const storage = $hyoo_crus_glob.home( Gigacluster )
		// 	// const ref = storage.ref().description
		// 	// console.log( "global ref:", ref )
		// 	console.log( "Public key: ", this.$.$hyoo_crus_auth.current().public().toString() )
		// 	console.log( "Gigacluster ref: ", $apxu_samosbor_map_app_gigacluster_ref )
		// 	console.log( "Lord key: ", $hyoo_crus_auth.current().lord() )
		// 	const storage = $hyoo_crus_glob.Node( $hyoo_crus_ref( $apxu_samosbor_map_app_gigacluster_ref ), $apxu_samosbor_map_gigacluster ) // используем мой home
		// 	const is_admin = storage.ref() === this.$.$hyoo_crus_auth.current().lord()
		// 	if( is_admin ) {
		// 		console.log("Apxu rank", storage.land().lord_rank(this.$.$hyoo_crus_auth.current().lord()))
		// 		storage.land().give( $hyoo_crus_auth.from( $apxu_samosbor_map_app_my_public_key ), $hyoo_crus_rank_rule )
		// 		storage.land().give( null, $hyoo_crus_rank_join( "just" ) )
		// 	}
		// 	return storage
		// }

		@$mol_action
		delete_block( ref: any ) {
			// TODO пройтись по соединениям и удалить их
			const block = $hyoo_crus_glob.Node( ref, $apxu_samosbor_map_block_data )
			block.transitions()?.forEach( ( transition ) => {
				const connected_block_ref = transition.get_connected_block( ref )
				if( !connected_block_ref ) return
				const connected_block = $hyoo_crus_glob.Node( connected_block_ref, $apxu_samosbor_map_block_data )
				connected_block.transitions()?.forEach( ( connected_transition ) => {
					if( connected_transition.get_connected_block( connected_block_ref ) === ref ) {
						connected_block.Transitions( null )?.cut( connected_transition.ref() )
					}
				} )
			} )
			this.Blocks( true )?.cut( ref )
		}
		@$mol_action
		create_block() {
			const current_auth = $hyoo_crus_auth.current()
			const block = this.Blocks( true )?.make( { '': $hyoo_crus_rank_join( "just" ) } )
			console.log( "created", block )
			return block!
		}
		@$mol_action
		delete_all_blocks() {
			this.blocks()?.map( ( node ) => this.delete_block( node.ref() ) )
		}
		@$mol_mem
		blocks() {
			const blocks = this.Blocks()?.remote_list() ?? []
			return blocks
		}
		@$mol_mem_key
		block_by_name( block_name: string ) {
			return this.blocks()?.find( ( block ) => block.name() === block_name )
		}
		transition( block: $apxu_samosbor_map_block_data, floor: number, position: TransitionPosition ) {
			return block?.transitions()?.find( ( trans ) => {
				const check = ( port: TransitionPort | undefined | null ) => {
					if( !port ) return
					const block_ref = port.Block( null )?.val()
					if( !block_ref ) return
					if( $hyoo_crus_glob.Node( block_ref, $apxu_samosbor_map_block_data ) === block && Number( port.Floor( null )?.val() ) === floor && port.Position( null )?.val() === position ) {
						return true
					}
				}
				if( check( trans.From( null ) ) || check( trans.To( null ) ) ) {
					return true
				}
			} )
		}
	}

}
