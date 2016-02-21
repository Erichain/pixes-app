/**
 * @description controller for recommend detail page
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-02-21
 */
(function ( Recommend ) {

    Recommend.controller('recommendDetailCtrl', recommendDetailCtrl);
    recommendDetailCtrl.$inject = ['$ionicPopup'];

    function recommendDetailCtrl( $ionicPopup ) {
        var vm = this;

        vm.leaveComment = function () {
            leaveComment();
        };

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