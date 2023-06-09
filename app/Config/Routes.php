<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (is_file(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->addPlaceholder('uuid', '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}');

// Routes Frontend Website
$routes->get('/', [\App\Controllers\Frontend\HomeController::class, 'index']);
$routes->get('category/(:any)', [\App\Controllers\Frontend\HomeController::class, 'show']);
$routes->post('search/fetch', [\App\Controllers\Frontend\HomeController::class, 'fetch']);

// Routes Backend Website
$routes->get('ext-login', [\App\Controllers\Extranet\AuthController::class, 'login']);
$routes->post('ext-auth', [\App\Controllers\Extranet\AuthController::class, 'auth']);
$routes->get('ext-logout', [\App\Controllers\Extranet\AuthController::class, 'logout']);
$routes->group('extranet', ['filter' => 'auth'], function($routes){
	$routes->get('/', [\App\Controllers\Extranet\ProductController::class, 'index']);
	$routes->post('store', [\App\Controllers\Extranet\HomeExtranetController::class, 'store']);

	$routes->group('product', function ($routes) {
		$routes->get('/', [\App\Controllers\Extranet\ProductController::class, 'index']);
		$routes->get('create', [\App\Controllers\Extranet\ProductController::class, 'create']);
		$routes->post('store', [\App\Controllers\Extranet\ProductController::class, 'store']);
		$routes->get('edit/(:uuid)', [\App\Controllers\Extranet\ProductController::class, 'edit']);
		$routes->post('update/(:uuid)', [\App\Controllers\Extranet\ProductController::class, 'update']);
		$routes->get('destroy/(:uuid)', [\App\Controllers\Extranet\ProductController::class, 'destroy']);
    });
});

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
