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

        vm.logOut = logOut;

        function logOut() {
            var options = {
                title: 'Log Out',
                template: 'Are you sure to log out ?',
                okType: 'button-assertive'
            };

            $ionicPopup.confirm(options).then(function ( data ) {
                $state.go('start');
            });
        }
    }

})( angular.module('Pixes.me') );