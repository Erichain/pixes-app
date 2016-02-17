/**
 * login page's controller
 *
 * @controller AccessCtrl
 * @module Pixes.access
 * @author Erichain
 * @date 2015-10-25
 */
(function ( Access ) {

    Access.controller('AccessCtrl', AccessCtrl);
    AccessCtrl.$inject = ['$scope', '$location', '$timeout', '$ionicLoading'];

    function AccessCtrl( $scope, $location, $timeout, $ionicLoading ) {
        var vm = this;

        vm.login = {
            username: 'Erichain',
            password: ''
        };

        vm.signIn = function () {
            signIn();
        };

        vm.signUp = function () {
            signUp();
        };

        /**
         * implementation functions
         * @function signIn
         * @function signUp
         * @function getDataByRefresh
         */

        /* signg in */
        function signIn() {
            if ( !vm.login.username || !vm.login.password ) {
                vm.isEmpty = true;
                $timeout(function () {
                    vm.isEmpty = false;
                }, 1000);
                return;
            }

            if ( vm.login.username === 'Erichain' && vm.login.password === '123456' ) {
                $ionicLoading.show({
                    template: 'Loading'
                });
                $timeout(function () {
                    $ionicLoading.hide();
                    $location.path('/tab/recommend/list');
                }, 1000);
            }
        }

        /* sign up */
        function signUp() {}

    }

})( angular.module('Pixes.access') );
