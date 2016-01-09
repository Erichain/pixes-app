/**
 * router for access
 *
 * @module Pixes.access
 * @author Erichain
 * @date 2016-01-04
 */
(function ( Access ) {

    Access
        .run()
        .config([
            '$stateProvider', '$urlRouterProvider',
            function ( $stateProvider, $urlRouterProvider ) {

                $stateProvider

                    .state('access.login', {
                        url: '/login',
                        views: {
                            'page-login': {
                                templateUrl: 'views/access/login.html',
                                controller: 'AccessCtrl'
                            }
                        }
                    })
                    .state('access.register', {
                        url: '/register',
                        views: {
                            'page-register': {
                                templateUrl: 'views/access/register.html',
                                controller: 'AccessCtrl'
                            }
                        }
                    })

            }]);

})( angular.module('Pixes.access') );