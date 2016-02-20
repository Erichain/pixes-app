/**
 * @description create page's controller
 * @controller CreateCtrl
 * @module Pixes.create
 * @author Erichain
 * @date 2015-10-25
 */
(function ( create ) {

    create.controller('CreateCtrl', CreateCtrl);
    CreateCtrl.$inject = ['CameraService'];

    function CreateCtrl( CameraService ) {
        var vm = this;

        vm.openPhotoLibrary = function () {
            openPhotoLibrary();
        };

        function openPhotoLibrary() {
            CameraService.getPicture().then(function ( imgURL ) {}, function () {})
        }
    }

})( angular.module('Pixes.create') );