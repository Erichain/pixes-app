/**
 * @description router for explore
 * @module Pixes.explore
 * @author Erichain
 * @date 2016-01-10
 */
(function ( Explore ) {

    Explore
        .config([
            '$stateProvider', '$urlRouterProvider',
            function ( $stateProvider, $urlRouterProvider ) {

                $stateProvider
                    .state('tab.explore', {
                        url: '/explore',
                        views: {
                            'tab-explore': {
                                templateUrl: 'views/explore/explore.html',
                                controller: 'ExploreCtrl as explore'
                            }
                        }
                    })

                    /* explore-people */
                    .state('tab.explore.people', {
                        url: '/people',
                        views: {
                            'subTab': {
                                templateUrl: 'views/explore/people.html',
                                controller: 'ExploreCtrl as explore'
                            }
                        }
                    })

                    /* explore-photo */
                    .state('tab.explore.photo', {
                        url: '/photo',
                        views: {
                            'subTab': {
                                templateUrl: 'views/explore/photo.html',
                                controller: 'ExploreCtrl as explore'
                            }
                        }
                    })
            }]);

})( angular.module('Pixes.explore') );