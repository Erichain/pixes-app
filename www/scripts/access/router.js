/**
 * @description router for access
 * @module Pixes.access
 * @author Erichain
 * @date 2016-01-04
 */
(function ( Access ) {

    Access
        .config([
            '$stateProvider', '$urlRouterProvider',
            function ( $stateProvider, $urlRouterProvider ) {

                $stateProvider
                    .state('access.login', {
                        url: '/login',
                        views: {
                            'access-page': {
                                templateUrl: 'views/access/login.html',
                                controller: 'AccessCtrl as access'
                            }
                        }
                    })
                    .state('access.register', {
                        url: '/register',
                        views: {
                            'access-page': {
                                templateUrl: 'views/access/register.html',
                                controller: 'AccessCtrl as access'
                            }
                        }
                    });
            }]);

})( angular.module('Pixes.access') );