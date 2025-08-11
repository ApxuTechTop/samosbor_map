namespace $ {


	export class $apxu_samosbor_map_storage extends $hyoo_crus_home.with( {
		Maps: $hyoo_crus_list_ref_to( () => $apxu_samosbor_map )
	} ) {
		@$mol_mem
		static global() {
			const storage_ref = $apxu_samosbor_map_app_storage_ref
			const storage = storage_ref ? $hyoo_crus_glob.Node( $hyoo_crus_ref( storage_ref ), $apxu_samosbor_map_storage ) : $hyoo_crus_glob.home( $apxu_samosbor_map_storage )
			console.log( "STORAGE REF: ", storage.ref() )
			// TODO
			return storage
		}
		@$mol_mem
		static active_map( next?: number ) {
			return next ?? 0
		}
		@$mol_mem
		static current() {
			const current_id = this.active_map()
			const maps_field = this.global().Maps()
			// вот тут надо дождаться загрузки
			const maps = maps_field?.remote_list() ?? []
			const map = maps[ current_id ] ? maps[ current_id ] : maps_field?.make( { '': $hyoo_crus_rank_read } )
			return map
		}
	}
}
