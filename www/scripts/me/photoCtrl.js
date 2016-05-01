/**
 * @description controller for my photos
 * @module Pixes.me
 * @author Erichain
 * @date 2016-04-13
 */
(function ( Me ) {

    Me.controller('PhotoCtrl', PhotoCtrl);
    PhotoCtrl.$inject = ['MeService'];

    function PhotoCtrl( MeService ) {
        var vm = this;

        init();

        function init() {
            MeService.getUsersPhotos().then(function ( data ) {
                vm.imgData = data.photo.slice(70, 90);
            });
        }

    }

})( angular.module('Pixes.me') );