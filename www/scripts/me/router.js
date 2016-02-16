/**
 * router for me
 *
 * @module Pixes.me
 * @author Erichain
 * @date 2016-01-10
 */
(function( Me ) {

    Me
        .config([
            '$stateProvider', '$urlRouterProvider',
            function( $stateProvider, $urlRouterProvider ) {

                $stateProvider
                    .state('tab.me', {
                        url: '/me',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me.html',
                                controller: 'MeCtrl as me'
                            }
                        }
                    });
            }]);

})( angular.module('Pixes.me') );