/**
 * router for explore
 *
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
            }]);

})( angular.module('Pixes.explore') );