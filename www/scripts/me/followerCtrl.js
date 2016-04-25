/**
 * @description controller my followers
 * @module Pixes.me
 * @author Erichain
 * @date 2016-04-13
 */
(function ( Me ) {

    Me.controller('FollowerCtrl', FollowerCtrl);
    FollowerCtrl.$inject = ['MeService'];

    function FollowerCtrl( MeService ) {
        var vm = this;

        MeService.getUsersFollowers().then(function ( data ) {
            vm.followerData = data.result;
        });
    }

})( angular.module('Pixes.me') );