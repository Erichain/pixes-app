/**
 * @description router for Pixes
 * @module Pixes.common
 * @author Erichain
 * @date 2015-10-25
 */
(function ( Common ) {
    Common.run([
        '$rootScope', '$state', '$stateParams', '$ionicPlatform',
        function ( $rootScope, $state, $stateParams, $ionicPlatform ) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $ionicPlatform.ready(function () {
                if ( window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard ) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if ( window.StatusBar ) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleLightContent();
                }
            });

        }])
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
                    templateUrl: 'views/common/access.html',
                    controller: 'AccessCtrl as access'
                })

                /* tabs' page router definition */
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'views/common/tabs.html'
                })
        }]);
})( angular.module('Pixes.common') );