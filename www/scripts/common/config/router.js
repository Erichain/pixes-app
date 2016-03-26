/**
 * @description router for Pixes
 * @module Pixes.common
 * @author Erichain
 * @date 2015-10-25
 */
(function ( Common ) {
    Common
        .config([
            '$stateProvider', '$urlRouterProvider',
            function ( $stateProvider, $urlRouterProvider ) {
                $urlRouterProvider.when('', '/start');

                $stateProvider
                    .state('start', {
                        cache: false,
                        url: '/start',
                        templateUrl: 'views/start/start.html',
                        controller: 'StartCtrl'
                    })

                    /* access router */
                    .state('access', {
                        cache: false,
                        url: '/access',
                        templateUrl: 'views/access/access.html',
                        controller: 'AccessCtrl as access'
                    })

                    /* tabs' page router definition */
                    .state('tab', {
                        url: '/tab',
                        abstract: true,
                        templateUrl: 'views/common/tabs.html'
                    });
            }]);
})( angular.module('Pixes.common') );