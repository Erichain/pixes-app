/**
 * mock data for recommend page
 *
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-01-10
 */
(function ( Recommend ) {

    Mock.mockjax(Recommend);

    Recommend.run([
        'config', 'RecommendApi',
        function ( config, recommendApi ) {
            var root = config.API_ROOT_URL;

            Mock.mock(root + recommendApi.recommend.list, {
                'result|20': [{
                    'src': 'images/recommend/photo.png',
                    'img_id|100000000-55555555': 0
                }]
            });
        }]);

})( angular.module('Pixes.recommend') );