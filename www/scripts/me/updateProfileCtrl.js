/**
 * @description controller for update profile
 * @module Pixes.me
 * @author Erichain
 * @date 2016-02-27
 */
(function ( Me ) {

    Me.controller('updateProfileCtrl', updateProfileCtrl);
    updateProfileCtrl.$inject = ['$state', 'UserService', 'MeService', 'Toast'];

    function updateProfileCtrl( $state, UserService, MeService, Toast ) {
        var vm = this;

        vm.updateProfile = updateProfile;

        init();

        // get user's info
        function init() {
            MeService.getUserInfo().then(function ( data ) {
                vm.formData = angular.merge({}, data, UserService.getInfo());
            });
        }

        // update user's profile
        function updateProfile() {
            UserService.setInfo(vm.formData);
            Toast.showToast('400001');
            $state.go('tab.me');
        }
    }

})( angular.module('Pixes.me') );