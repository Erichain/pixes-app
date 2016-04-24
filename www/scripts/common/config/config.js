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

                    $cordovaKeyboard.hideAccessoryBar(true);
                    $cordovaKeyboard.disableScroll(true);
                    $cordovaKeyboard.close();
                });

            /*$rootScope.$on('$stateChangeStart', function ( event, stateName ) {
                var reg = /^tab.me(\w+){0,}$/,
                    toStateName = stateName.name,
                    isBesideApp = reg.test(toStateName),

                    // decide a user is signed or not
                    isLogined = false;

                if ( isBesideApp ) {
                    event.preventDefault();
                    $state.go('login');
                }
            });*/

        }]);


})( angular.module('Pixes.common') );