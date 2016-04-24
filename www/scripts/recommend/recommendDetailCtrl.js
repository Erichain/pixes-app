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
        vm.starPhoto = starPhoto;

        // initialize
        vm.comments = [];
        vm.isStar = false;

        getDetail();

        function getDetail() {
            var reqParams = {
                photo_id: $stateParams.img_id
            };

            // initialize
            vm.photoInfo = {};

            RecommendService.getPhotoDetail(reqParams).then(function ( data ) {
                vm.photoInfo = data;

                // user comments
                vm.comments = data.comment;
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

            $ionicPopup.prompt(options).then(function ( res ) {
                vm.comments.push({
                    iconurls: {
                        medium: 'https://c2.staticflickr.com/8/7674/buddyicons/47919595@N02_m.jpg?1431563398#47919595@N02'
                    },
                    authorname: 'Erichain',
                    _content: res
                });
            });
        }

        function starPhoto() {
            vm.isStar = !vm.isStar;
        }
    }

})( angular.module('Pixes.recommend') );