/**
 * @description mock data for explore module
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-04-19
 */
(function ( Explore ) {

    Mock.mockjax(Explore);
    Explore.run([
        'config', 'ExploreApi',
        function ( config, ExploreApi ) {

            var root = config.API_ROOT_URL,
                Random = Mock.Random;

            Mock.mock(root + ExploreApi.people, {
                'result|30': [{
                    'name': '@name',
                    'avatar_url': Random.dataImage(),
                    'follower_count|0-10000': 0,
                    'following_count|0-10000': 0,
                    'photo_count|0-1000': 0,
                    'status|1': [0, 1]
                }]
            });

        }]);

})( angular.module('Pixes.explore') );