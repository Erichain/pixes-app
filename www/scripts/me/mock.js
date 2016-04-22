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
                'avatar_url': Random.image('250x250'),
                'username': '@name',
                'brief_intro': Random.paragraph(1, 2),
                'count_follower|0-2000': 0,
                'count_following|0-2000': 0,
                'photo_count|0-1000': 0
            });

        }]);

})( angular.module('Pixes.me') );