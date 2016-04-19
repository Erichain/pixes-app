/**
 * @description controller for recommend detail page
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-02-21
 */
(function ( Recommend ) {

    Recommend.controller('recommendDetailCtrl', recommendDetailCtrl);
    recommendDetailCtrl.$inject = ['$ionicPopup', '$stateParams', 'RecommendService'];

    function recommendDetailCtrl( $ionicPopup, $stateParams, RecommendService ) {
        var vm = this;

        vm.leaveComment = leaveComment;

        getDetail();

        function getDetail() {
            var reqParams = {
                photo_id: $stateParams.img_id
            };

            // initialize
            vm.photoInfo = {};

            RecommendService.getPhotoDetail(reqParams).then(function ( data ) {
                vm.photoInfo = data;
            }, function ( error ) {

            });
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