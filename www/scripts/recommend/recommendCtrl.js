/**
 * @description recommend page's controller
 * @controller RecommendCtrl
 * @module Pixes.recommend
 * @author Erichain
 * @date 2015-10-25
 */
(function ( recommend ) {

    recommend.controller('RecommendCtrl', RecommendCtrl);
    RecommendCtrl.$inject = ['$scope', '$timeout', 'RecommendService', '$ionicPopup', 'TempService'];

    function RecommendCtrl( $scope, $timeout, RecommendService, $ionicPopup, TempService ) {
        var vm = this;

        vm.getDataByRefresh = getDataByRefresh;

        //getPhotosList();
        getInterestingPhotos();

        // get photos list
        function getPhotosList() {
            var reqParams = {};

            vm.isLoaded = false;
            RecommendService.getPhotosList( reqParams ).then(function ( data ) {

                vm.isLoaded = true;

                vm.imgData = data.result;

            }, function ( data ) {
                vm.isLoaded = true;
            });
        }

        // get interesting photos list
        function getInterestingPhotos() {
            RecommendService.getInterestingPhotos().then(function ( data ) {
                vm.isLoaded = true;
                vm.imgData = data.photo.slice(0, 20);
            }, function ( error ) {
                vm.isLoaded = true;
            });
        }

        // refreshing by pulling down
        function getDataByRefresh() {
            $timeout(function () {
                $scope.$broadcast('scroll.refreshComplete');
            }, 2000);
        }
    }

})( angular.module('Pixes.recommend') );
