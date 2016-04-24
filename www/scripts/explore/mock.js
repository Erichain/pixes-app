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
                Random = Mock.Random,
                avatar_urls = [
                    'https://c2.staticflickr.com/2/1622/buddyicons/134105539@N04_m.jpg?1451825990#134105539@N04',
                    'https://c2.staticflickr.com/4/3821/buddyicons/16939187@N06_m.jpg?1369115944#16939187@N06',
                    'https://c1.staticflickr.com/1/498/buddyicons/128683429@N03_m.jpg?1437096950#128683429@N03',
                    'https://c2.staticflickr.com/2/1712/buddyicons/82831944@N02_m.jpg?1454603721#82831944@N02',
                    'https://c1.staticflickr.com/1/759/buddyicons/98080989@N05_m.jpg?1450822020#98080989@N05',
                    'https://c2.staticflickr.com/2/1519/buddyicons/136713325@N02_m.jpg?1461011223#136713325@N02',
                    'https://c2.staticflickr.com/2/1495/buddyicons/140663475@N04_m.jpg?1460393693#140663475@N04'
                ];

            Mock.mock(root + ExploreApi.people, {
                'result|30': [{
                    'name': '@name',
                    'avatar_url|1': avatar_urls,
                    'follower_count|0-10000': 0,
                    'following_count|0-10000': 0,
                    'photo_count|0-1000': 0,
                    'status|1': [0, 1]
                }]
            });

        }]);

})( angular.module('Pixes.explore') );