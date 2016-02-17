/**
 * router for recommend
 *
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-01-10
 */
(function ( Recommend ) {

    Recommend
        .config([
            '$stateProvider', '$urlRouterProvider',
            function ( $stateProvider, $urlRouterProvider ) {

                $stateProvider
                    .state('tab.recommend_list', {
                        url: '/recommend/list',
                        views: {
                            'tab-recommend': {
                                templateUrl: 'views/recommend/recommend-list.html',
                                controller: 'RecommendCtrl as recommend'
                            }
                        }
                    })
                    .state('tab.recommend_detail', {
                        url: '/recommend/detail?img_id',
                        views: {
                            'tab-recommend': {
                                templateUrl: 'views/recommend/recommend-detail.html',
                                controller: 'RecommendCtrl as recommend'
                            }
                        }
                    })

            }]);

})( angular.module('Pixes.recommend') );