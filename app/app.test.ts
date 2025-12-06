/**
 * Аналог config.yaml или .env - окружение для локальной разработки.
 * Нужно получить из консоли разработчика
 * - ref на $hyoo_crus_auth.current().lord().description
 * - public_key на свой $hyoo_crus_auth.current().public().toString()
 */
namespace $ {
	$.$apxu_samosbor_map_app_storage_ref = $hyoo_crus_auth.current().lord().description! // TODO брать из ссылки
	$.$apxu_samosbor_map_app_my_public_key = $hyoo_crus_auth.current().public().toString()
}
