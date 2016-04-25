/**
 * @description global config
 * @module Pixes.common
 * @author Erichain
 * @date 2015-10-31
 */

(function ( Common ) {

    Common
        .constant('config', {
            API_ROOT_URL: 'http://0.0.0.0:9022'
        })
        .run([
            '$rootScope',
            '$state',
            '$stateParams',
            '$ionicPlatform',
            '$cordovaKeyboard',
            '$cordovaStatusbar',
            function (
                $rootScope,
                $state,
                $stateParams,
                $ionicPlatform,
                $cordovaKeyboard,
                $cordovaStatusbar
            ) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                $ionicPlatform.ready(function () {
                    var isVisible = $cordovaKeyboard.isVisible();
                    $cordovaStatusbar.styleColor('white');

                    $cordovaKeyboard.disableScroll(true);
                    $cordovaKeyboard.close();
                });

                /*$rootScope.isLogined = false;

                $rootScope.$on('login.ok', function () {
                    $rootScope.isLogined = true;
                });

                $rootScope.$on('$stateChangeStart', function ( event, stateName ) {
                    var reg = /^(tab.me|tab.create)(\w+){0,}$/,
                        toStateName = stateName.name,
                        isBesideApp = reg.test(toStateName);

                    if ( isBesideApp && !$rootScope.isLogined ) {
                        event.preventDefault();
                        $state.go('login');
                    }
                });*/
            }]);


})( angular.module('Pixes.common') );