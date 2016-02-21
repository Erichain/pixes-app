/**
 * @description
 * controller for photo editing and uploading
 * @module Pixes.create
 * @author Erichain
 * @date 2016.02.21
 */
(function ( Create ) {

    Create.controller('uploadPhotoCtrl', uploadPhotoCtrl);
    uploadPhotoCtrl.$inject = ['$location'];

    function uploadPhotoCtrl( $location ) {
        var vm = this;

        vm.uploadPhoto = function () {
            uploadPhoto();
        };

        function uploadPhoto() {
            $location.path('/tab/create');
        }
    }

})( angular.module('Pixes.create') );