'use strict';

//Setting up route
angular.module('artists').config(['$stateProvider',
	function($stateProvider) {
		// Artists state routing
		$stateProvider.
		state('artists', {
			url: '/artists',
			templateUrl: 'modules/artists/views/artists.client.view.html'
		});
	}
]);