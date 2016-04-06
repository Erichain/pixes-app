/**
 * @description login page's controller
 * @controller AccessCtrl
 * @module Pixes.access
 * @author Erichain
 * @date 2015-10-25
 */
(function ( Access ) {

    Access.controller('AccessCtrl', AccessCtrl);
    AccessCtrl.$inject = ['$scope', '$location', '$timeout', '$ionicLoading', 'Toast'];

    function AccessCtrl( $scope, $location, $timeout, $ionicLoading, Toast ) {
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

        /* signg in */
        function signIn() {
            if ( !vm.login.username || !vm.login.password ) {
                Toast.showToast('000001');
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
