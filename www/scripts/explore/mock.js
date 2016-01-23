/**
 * mock data for explore
 *
 * @module Pixes.explore
 * @author Erichain
 * @date 2016-01-23
 */
(function ( Explore ) {

    Mock.mockjax(Explore);

    Explore.run([
        'config', 'ExploreApi',
        function ( config, ExploreApi ) {
            var root = config.API_ROOT_URL;

            Mock.mock(root + ExploreApi.explore.list.people, {
                'result|20': [{
                    'avatar_url': '',
                    'name': '@name',
                    'follower_count|20-100': 0,
                    'following_count|10-200': 0,
                    'photo_count|0-100': 0
                }]
            });

        }]);

})( angular.module('Pixes.explore') );