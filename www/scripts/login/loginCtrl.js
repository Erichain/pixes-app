/**
 * login page's controller
 *
 * @author Erichain
 * @date 2015-10-25
 */
(function ( login ) {
    var signIn = function ( scope, location ) {
            if ( scope.user.username === 'Erichain' && scope.user.password === '123456' ) {
                location.path('/tab/recommend');
            }
        },

        LoginCtrl = function ( $scope, $location, $http, $timeout, $ionicLoading ) {
            $scope.user = {
                username: 'Erichain'
            };
            $scope.signIn = function () {
                if ( !$scope.user.username || !$scope.user.password ) {
                    $scope.isEmpty = true;
                    $timeout(function () {
                        $scope.isEmpty = false;
                    }, 1000);
                    return;
                }
                $ionicLoading.show({
                    template: 'Loading'
                });
                $timeout(function () {
                    $ionicLoading.hide();
                    signIn($scope, $location);
                }, 2000);
            }
        };

    login.controller('LoginCtrl', LoginCtrl);
    LoginCtrl.$inject = ['$scope', '$location', '$http', '$timeout', '$ionicLoading'];
})( Pixes.login );
