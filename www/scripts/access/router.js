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
                    .state('access', {
                        url: '/access',
                        template: '<ui-view/>',
                        abstract: true
                    })
                    .state('access.login', {
                        url: '/login',
                        templateUrl: 'views/access/login.html',
                        controller: 'AccessCtrl'
                    })
                    .state('access.reg', {
                        url: '/reg',
                        templateUrl: 'views/access/register.html',
                        controller: 'AccessCtrl'
                    })

            }]);

})( angular.module('Pixes.access') );