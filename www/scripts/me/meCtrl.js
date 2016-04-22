/**
 * @description me page's controller
 * @controller MeCtrl
 * @module Pixes.me
 * @author Erichain
 * @date 2015-10-25
 */
(function ( me ) {

    me.controller('MeCtrl', MeCtrl);
    MeCtrl.$inject = ['$state', '$ionicPopup', 'MeService'];

    function MeCtrl( $state, $ionicPopup, MeService ) {
        var vm = this;

        vm.logOut = logOut;

        init();

        // function to initialize, such as profile etc.
        function init() {
            MeService.getUserInfo().then(function ( data ) {
                vm.info = data;
            });
        }

        // function to log out
        function logOut() {
            var options = {
                title: 'Log Out',
                template: 'Are you sure to log out ?',
                okType: 'button-assertive'
            };

            $ionicPopup.confirm(options).then(function ( data ) {
                if ( data ) {
                    $state.go('start');
                }
                else {
                    // if canceled, do nothing
                }
            });
        }
    }

})( angular.module('Pixes.me') );
