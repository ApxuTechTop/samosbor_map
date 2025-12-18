/**
 * Аналог config.yaml или .env - окружение для локальной разработки.
 * Нужно получить из консоли разработчика
 * - ref на $hyoo_crus_auth.current().lord().description
 * - public_key на свой $hyoo_crus_auth.current().public().toString()
 */
namespace $ {
	$.$apxu_samosbor_map_app_storage_ref = $hyoo_crus_auth.current().lord().description!
	// $.$apxu_samosbor_map_app_gigacluster_ref = "rIuXD13u_MIkær61B"
	// $.$apxu_samosbor_map_app_roles_ref = "rIuXD13u_MIkær61B"
	$.$apxu_samosbor_map_app_my_public_key = $hyoo_crus_auth.current().public().toString()
}
