namespace $ {


	export class $apxu_samosbor_map_storage extends $hyoo_crus_home.with( {
		Maps: $hyoo_crus_list_ref_to( () => $apxu_samosbor_map )
	} ) {
		static global() {
			const storage_ref = $apxu_samosbor_map_app_storage_ref
			const storage = storage_ref ? $hyoo_crus_glob.Node( $hyoo_crus_ref( storage_ref ), $apxu_samosbor_map_storage ) : $hyoo_crus_glob.home( $apxu_samosbor_map_storage )
			console.log( "STORAGE REF: ", storage.ref() )
			// TODO
			return storage
		}
		@$mol_mem
		static current() {
			const current_id = 0
			const maps = this.global().Maps( true )!
			const map = maps.remote_list()[ current_id ] ?? maps.make( { '': $hyoo_crus_rank_read } )
			console.log( "MAP REF: ", map.ref() )
			return map
		}
	}
}
