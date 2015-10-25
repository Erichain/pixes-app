/**
 * router for Pixes
 *
 * @module Pixes
 * @author Erichain
 * @date 2015-10-25
 */

var pixesApp = angular.module('Pixes', [
    'ionic',
    'Pixes.home',
    'Pixes.explore',
    'Pixes.favorites',
    'Pixes.me']);

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

        $stateProvider.state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'views/tabs.html'
        }).state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'views/home/home.html',
                    controller: 'HomeCtrl'
                }
            }
        }).state('tab.explore', {
            url: '/explore',
            views: {
                'tab-explore': {
                    templateUrl: 'views/explore/explore.html',
                    controller: 'ExploreCtrl'
                }
            }
        }).state('tab.favorites', {
            url: '/favorites',
            views: {
                'tab-favorites': {
                    templateUrl: 'views/favorites/favorites.html',
                    controller: 'FavoritesCtrl'
                }
            }
        }).state('tab.me', {
            url: '/me',
            views: {
                'tab-me': {
                    templateUrl: 'views/me/me.html',
                    controller: 'MeCtrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/tab/home');

    }]);