/**
 * router for Pixes
 *
 * @module Pixes
 * @author Erichain
 * @date 2015-10-25
 */

var pixesApp = angular.module('Pixes', [
    'ionic',
    'Pixes.login',
    'Pixes.register',
    'Pixes.recommend',
    'Pixes.explore',
    'Pixes.create',
    'Pixes.me'
    ]);

pixesApp.run(function ( $ionicPlatform ) {
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
})
.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {

        $urlRouterProvider.when('', '/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login/login.html',
                controller: 'LoginCtrl'
            })

            /* register router */
            .state('register', {
                url: '/register',
                templateUrl: 'views/register/register.html',
                controller: 'RegisterCtrl'
            })

            /* tabs' page router */
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'views/tabs.html'
            })
            .state('tab.recommend', {
                url: '/recommend',
                views: {
                    'tab-recommend': {
                        templateUrl: 'views/recommend/recommend.html',
                        controller: 'RecommendCtrl'
                    }
                }
            })
            .state('tab.explore', {
                url: '/explore',
                views: {
                    'tab-explore': {
                        templateUrl: 'views/explore/explore.html',
                        controller: 'ExploreCtrl'
                    }
                }
            })
            .state('tab.create', {
                url: '/create',
                views: {
                    'tab-create': {
                        templateUrl: 'views/create/create.html',
                        controller: 'CreateCtrl'
                    }
                }
            })
            .state('tab.me', {
                url: '/me',
                views: {
                    'tab-me': {
                        templateUrl: 'views/me/me.html',
                        controller: 'MeCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/recommend');

    }]);