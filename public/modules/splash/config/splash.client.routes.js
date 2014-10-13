'use strict';

//Setting up route
angular.module('splash').config(['$stateProvider',
	function($stateProvider) {
		// Splash state routing
		$stateProvider.
		state('splash', {
			url: '/splash',
			templateUrl: 'modules/splash/views/splash.client.view.html'
		});
	}
]);