/**
 * @description recommend page's controller
 * @controller RecommendCtrl
 * @module Pixes.recommend
 * @author Erichain
 * @date 2015-10-25
 */
(function ( recommend ) {

    recommend.controller('RecommendCtrl', RecommendCtrl);
    RecommendCtrl.$inject = ['$scope', '$timeout', 'RecommendService', '$ionicPopup'];

    function RecommendCtrl( $scope, $timeout, RecommendService, $ionicPopup ) {
        var vm = this;

        vm.getDataByRefresh = getDataByRefresh;

        vm.leaveComment = leaveComment;

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
                console.log('error');
            });
        }

        // get interesting photos list
        function getInterestingPhotos() {
            RecommendService.getInterestingPhotos().then(function ( data ) {
                vm.isLoaded = true;
                console.log(data);
            }, function ( error ) {
                vm.isLoaded = true;
            });
        }

        // refreshing by pulling down
        function getDataByRefresh() {
            console.log('refreshed!');
            $timeout(function () {
                $scope.$broadcast('scroll.refreshComplete');
            }, 2000);
        }

        // leave comment
        function leaveComment() {
            var options = {
                title: 'Leave A Comment',
                inputType: 'text',
                inputPlaceholder: 'Leave your comment to author',
                cancelText: 'Cancel',
                okText: 'OK',
                okType: 'button-general'
            };

            $ionicPopup.prompt(options);
        }
    }

})( angular.module('Pixes.recommend') );
