'use strict';

var munumModulo = angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

munumModulo.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	//if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Inicializar la aplicacion
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
