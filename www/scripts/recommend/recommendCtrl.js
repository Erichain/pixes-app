/**
 * recommend page's controller
 *
 * @controller RecommendCtrl
 * @module Pixes.recommend
 * @author Erichain
 * @date 2015-10-25
 */
(function ( recommend ) {

    recommend.controller('RecommendCtrl', RecommendCtrl);
    RecommendCtrl.$inject = ['$scope', '$timeout', 'RecommendService'];

    function RecommendCtrl ( $scope, $timeout, RecommendService ) {
        var vm = this;

        vm.getDataByRefresh = function () {
            getDataByRefresh();
        };

        getPhotosList();

        /**
         * implememention functions
         *
         * @function getPhotosList
         * @function getDataByRefresh
         */

        /* get photos list */
        function getPhotosList () {
            var reqParams = {};

            RecommendService.getPhotosList( reqParams ).then(function ( data ) {
                vm.imgData = data.result;

            }, function ( data ) {
                console.log('error');
            });
        }

        /* refreshing by pulling down */
        function getDataByRefresh () {
            console.log('refreshed!');
            $timeout(function () {
                $scope.$broadcast('scroll.refreshComplete');
            }, 2000);
        }
    }

})( angular.module('Pixes.recommend') );
