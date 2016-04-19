/**
 * @description controller for start page
 * @module Pixes.start
 * @controller StartCtrl
 * @author Erichain
 * @date 2016-01-04
 */
(function ( Start ) {

    Start.controller('StartCtrl', StartCtrl);
    StartCtrl.$inject = ['$rootScope', '$state', '$cordovaInAppBrowser', 'StartService', 'Toast'];

    function StartCtrl( $rootScope, $state, $cordovaInAppBrowser, StartService, Toast ) {
        var vm = this,
            requestToken = {};

        vm.signIn = signIn;

        vm.verifyAccess = verifyAccess;

        // operation after closing the browser
        $rootScope.$on('$cordovaInAppBrowser:exit', function ( e, event ) {
            $state.go('tab.recommend_list');
        });

        getRequestToken();

        // get request token from backend
        function getRequestToken() {
            StartService.getRequestToken().then(function ( data ) {
                // save oauth_token, oauth_token_secret to requestToken
                requestToken = data;
            }, function ( error ) {
                throw new Error(error);
            });
        }

        // sign in
        function signIn() {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'yes'
            };

            // open the flickr page to sign in
            document.addEventListener('deviceready', function () {
                $cordovaInAppBrowser.open('https://api.500px.com/v1/oauth/authorize?oauth_token=' + requestToken.oauth_token, '_blank', options)
                    .then(function ( event ) {
                        // success
                    })
                    .catch(function ( event ) {
                        // error
                    });
            }, false);
        }

        // verify
        function verifyAccess() {
            var reqParams = {
                oauth_token: requestToken.oauth_token,
                oauth_verifier: vm.verifier
            };

            StartService.getAccessToken( reqParams ).then(function ( data ) {
                $state.go('tab.recommend_list');
            }, function ( error ) {
                Toast.showToast('000001');
            });
        }
    }

})( angular.module('Pixes.start') );