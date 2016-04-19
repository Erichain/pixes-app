/**
 * @description mock data for recommend module
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-04-19
 */
(function ( Recommend ) {

    Mock.mockjax(Recommend);
    Recommend.run([
        'config', 'RecommendApi',
        function ( config, RecommendApi ) {}]);

})( angular.module('Pixes.recommend') );