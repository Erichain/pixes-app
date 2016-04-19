/**
 * @description setting page's controller
 * @controller settingCtrl
 * @module Pixes.me
 * @author Erichain
 * @date 2015-10-25
 */
(function ( Me ) {

    Me.controller('SettingCtrl', SettingCtrl);
    SettingCtrl.$inject = ['$ionicPopup', '$state'];

    function SettingCtrl( $ionicPopup, $state ) {
        var vm = this;
    }

})( angular.module('Pixes.me') );