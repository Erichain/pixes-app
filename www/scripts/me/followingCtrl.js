/**
 * @description controller my followings
 * @module Pixes.me
 * @author Erichain
 * @date 2016-04-13
 */
(function ( Me ) {

    Me.controller('FollowingCtrl', FollowingCtrl);
    FollowingCtrl.$inject = ['MeService'];

    function FollowingCtrl( MeService ) {
        var vm = this;

        MeService.getUsersFollowings().then(function ( data ) {
            vm.followingData = data.result;
        });
    }

})( angular.module('Pixes.me') );