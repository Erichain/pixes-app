/**
 * @description me page's controller
 * @controller MeCtrl
 * @module Pixes.me
 * @author Erichain
 * @date 2015-10-25
 */
(function ( me ) {

    me.controller('MeCtrl', MeCtrl);
    MeCtrl.$inject = ['$state', '$ionicPopup'];

    function MeCtrl( $state, $ionicPopup ) {
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
