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

    function AccessCtrl ( $scope, $location, $timeout, $ionicLoading ) {
        $scope.user = {
            username: 'Erichain',
            password: ''
        };

        $scope.signIn = function () {
            signIn($scope, $location, $timeout, $ionicLoading);
        };
    }

    function signIn ( scope, location, timeout, ionicLoading ) {
        if ( !scope.user.username || !scope.user.password ) {
            scope.isEmpty = true;
            timeout(function () {
                $scope.isEmpty = false;
            }, 1000);
            return;
        }

        if ( scope.user.username === 'Erichain' && scope.user.password === '123456' ) {
            ionicLoading.show({
                template: 'Loading'
            });
            timeout(function () {
                ionicLoading.hide();
                location.path('/tab/recommend');
            }, 1000);
        }
    }

})( angular.module('Pixes.access') );
