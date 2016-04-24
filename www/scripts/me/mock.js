/**
 * @description mock data for me module
 * @module Pixes.me
 * @author Erichain
 * @date 2016-04-19
 */
(function ( Me ) {

    Mock.mockjax(Me);
    Me.run([
        'config', 'MeApi',
        function ( config, MeApi ) {

            var root = config.API_ROOT_URL,
                Random = Mock.Random;

            Mock.mock(root + MeApi.userInfo, {
                'avatar_url|1': ['https://c2.staticflickr.com/8/7674/buddyicons/47919595@N02_m.jpg?1431563398#47919595@N02'],
                'username|1': ['Erichain'],
                'brief_intro|1': ['Life is beautiful.'],
                'count_follower|0-2000': 0,
                'count_following|0-2000': 0,
                'photo_count|0-1000': 0
            });

        }]);

})( angular.module('Pixes.me') );