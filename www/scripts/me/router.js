/**
 * @description router for me
 * @module Pixes.me
 * @author Erichain
 * @date 2016-01-10
 */
(function ( Me ) {

    Me
        .config([
            '$stateProvider', '$urlRouterProvider',
            function ( $stateProvider, $urlRouterProvider ) {

                $stateProvider
                    .state('tab.me', {
                        url: '/me',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me.html',
                                controller: 'MeCtrl as me'
                            }
                        }
                    })

                    /* me-follower */
                    .state('tab.me.follower', {
                        url: '/follower',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-following */
                    .state('tab.me.following', {
                        url: '/following',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-photo */
                    .state('tab.me.photo', {
                        url: '/photo',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-creations */
                    .state('tab.me.creations', {
                        url: '/creations',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-favorites */
                    .state('tab.me.favorites', {
                        url: '/favorites',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-bought */
                    .state('tab.me.bought', {
                        url: '/bought',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-settings */
                    .state('tab.me.settings', {
                        url: '/settings',
                        views: {
                            'tab-me': {}
                        }
                    });
            }]);

})( angular.module('Pixes.me') );