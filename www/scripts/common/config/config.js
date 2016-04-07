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
        .run(['$rootScope', '$state', '$stateParams', '$ionicPlatform', function ( $rootScope, $state, $stateParams, $ionicPlatform ) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $ionicPlatform.ready(function () {
                if ( window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard ) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if ( window.StatusBar ) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleLightContent();
                }
            });

            /*$rootScope.$on('$stateChangeStart', function ( event, stateName ) {
                var reg = /^tab(\.\w+){0,}$/,
                    toStateName = stateName.name,
                    isBesideApp = reg.test(toStateName);

                if ( isBesideApp ) {
                    event.preventDefault();
                    $state.go('access.login');
                }
            });*/

        }]);


})( angular.module('Pixes.common') );