/**
 * @description controller for my bought
 * @module Pixes.me
 * @author Erichain
 * @date 2016-04-15
 */
(function ( Me ) {

    Me.controller('BoughtCtrl', BoughtCtrl);
    BoughtCtrl.$inject = ['MeService'];

    function BoughtCtrl( MeService ) {
        var vm = this;

        init();

        function init() {
            MeService.getUsersBought().then(function ( data ) {
                vm.imgData = data.photo.slice(30, 49);
            });
        }
    }

})( angular.module('Pixes.me') );