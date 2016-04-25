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
                'photo_count|0-1000': 0,
                'gender|1': [0, 1]
            })

            .mock( root + MeApi.followers, {
                'result|20': [{
                    'avatar_url|1': [
                        'https://farm2.staticflickr.com/1445/26367953022_a44efc4fec_c.jpg',
                        'https://farm2.staticflickr.com/1526/25852528853_7a57719ed3_c.jpg',
                        'https://farm2.staticflickr.com/1496/26388497491_179dd25bd7_c.jpg',
                        'https://farm2.staticflickr.com/1672/25856196294_cbede006e3_c.jpg',
                        'https://farm2.staticflickr.com/1558/26191519000_f3454a46c9_c.jpg',
                        'https://farm2.staticflickr.com/1666/26431164076_40f37a8b51_c.jpg',
                        'https://farm2.staticflickr.com/1683/26392152971_426c8b9fd4_c.jpg',
                        'https://farm2.staticflickr.com/1633/26375074082_0fa2648f98_c.jpg',
                        'https://farm2.staticflickr.com/1441/25849123374_0ed0ecff93_c.jpg'
                    ],
                    'author': '@name',
                    'follower_count|0-1000': 0,
                    'following_count|0-1000': 0,
                    'photo_count|0-1000': 0,
                    'status|1': [0, 1]
                }]
            })
            .mock(root + MeApi.following, {
                'result|20': [{
                    'avatar_url|1': [
                        'https://farm2.staticflickr.com/1492/26178763710_1e487e03de_c.jpg',
                        'https://farm2.staticflickr.com/1672/25856196294_cbede006e3_c.jpg',
                        'https://farm2.staticflickr.com/1547/25860594583_e919145e48_c.jpg',
                        'https://farm2.staticflickr.com/1613/26399845691_1e93bd8b1b_c.jpg',
                        'https://farm2.staticflickr.com/1719/26365957532_1a308be64e_c.jpg',
                        'https://farm2.staticflickr.com/1711/26391353041_c57974cdd9_c.jpg',
                        'https://farm2.staticflickr.com/1629/25854259373_c1b2766245_c.jpg',
                        'https://farm2.staticflickr.com/1677/26464650185_c5aef3a17b_c.jpg',
                        'https://farm2.staticflickr.com/1453/26401263071_6da9f5b96c_c.jpg'
                    ],
                    'author': '@name',
                    'follower_count|0-1000': 0,
                    'following_count|0-1000': 0,
                    'photo_count|0-1000': 0,
                    'status': 1
                }]
            })

        }]);

})( angular.module('Pixes.me') );