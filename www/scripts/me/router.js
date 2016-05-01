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

                    /* update profile */
                    .state('tab.me_update_profile', {
                        url: '/update',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me-update-profile.html',
                                controller: 'updateProfileCtrl as updateProfile'
                            }
                        }
                    })

                    /* me-follower */
                    .state('tab.me_follower', {
                        url: '/follower',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me-follower.html',
                                controller: 'FollowerCtrl as myFollower'
                            }
                        }
                    })

                    /* me-following */
                    .state('tab.me_following', {
                        url: '/following',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me-following.html',
                                controller: 'FollowingCtrl as myFollowing'
                            }
                        }
                    })

                    /* me-photo */
                    .state('tab.me_photo', {
                        url: '/photo',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me-photo.html',
                                controller: 'PhotoCtrl as myPhoto'
                            }
                        }
                    })

                    /* me-favorites */
                    .state('tab.me_favorites', {
                        url: '/favorites',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me-favorites.html',
                                controller: 'FavoritesCtrl as myFavorites'
                            }
                        }
                    })

                    /* me-bought */
                    .state('tab.me_bought', {
                        url: '/bought',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/me-bought.html',
                                controller: 'BoughtCtrl as myBought'
                            }
                        }
                    })

                    /* me-settings */
                    .state('tab.me_setting', {
                        url: '/setting',
                        views: {
                            'tab-me': {
                                templateUrl: 'views/me/page-setting.html',
                                abstract: true
                            }
                        }
                    })

                    /* setting list */
                    .state('tab.me_setting.list', {
                        url: '/list',
                        templateUrl: 'views/me/me-setting.html',
                        controller: 'SettingCtrl as setting'
                    })

                    /* settings-feedback */
                    .state('tab.me_setting.feedback', {
                        url: '/feedback',
                        templateUrl: '',
                        controller: 'SettingCtrl as setting'
                    })

                    /* settings-about */
                    .state('tab.me_setting.about', {
                        url: '/about',
                        templateUrl: 'views/me/setting-about.html',
                        controller: 'SettingCtrl as setting'
                    });
            }]);

})( angular.module('Pixes.me') );