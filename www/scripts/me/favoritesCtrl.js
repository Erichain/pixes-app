/**
 * @description controller for my favorites
 * @module Pixes.me
 * @author Erichain
 * @date 2016-04-13
 */
(function ( Me ) {

    Me.controller('FavoritesCtrl', FavoritesCtrl);
    FavoritesCtrl.$inject = ['MeService'];

    function FavoritesCtrl( MeService ) {
        var vm = this;

        init();

        function init() {
            MeService.getUsersFavorites().then(function ( data ) {
                vm.imgData = data.photo.slice(46, 79);
            });
        }
    }

})( angular.module('Pixes.me') );