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
                    .state('tab.me_follower', {
                        url: '/follower',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me-follower.html',
                                controller: ''
                            }
                        }
                    })

                    /* me-following */
                    .state('tab.me_following', {
                        url: '/following',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me-following.html',
                                controller: ''
                            }
                        }
                    })

                    /* me-photo */
                    .state('tab.me_photo', {
                        url: '/photo',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-creations */
                    .state('tab.me_creations', {
                        url: '/creations',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-favorites */
                    .state('tab.me_favorites', {
                        url: '/favorites',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-bought */
                    .state('tab.me_bought', {
                        url: '/bought',
                        views: {
                            'tab-me': {}
                        }
                    })

                    /* me-settings */
                    .state('tab.me_settings', {
                        url: '/settings',
                        views: {
                            'tab-me': {}
                        }
                    });
            }]);

})( angular.module('Pixes.me') );