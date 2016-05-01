/**
 * @description controller for start page
 * @module Pixes.start
 * @controller StartCtrl
 * @author Erichain
 * @date 2016-01-04
 */
(function ( Start ) {

    Start.controller('StartCtrl', StartCtrl);
    StartCtrl.$inject = ['$rootScope', '$scope', '$state', '$cordovaInAppBrowser', 'StartService', 'Toast'];

    function StartCtrl( $rootScope, $scope, $state, $cordovaInAppBrowser, StartService, Toast ) {
        var vm = this,
            requestToken = {};

        vm.signIn = signIn;

        // operation after closing the browser
        $rootScope.$on('$cordovaInAppBrowser:exit', function ( e, event ) {
            $scope.$emit('login.ok');
            $state.go('tab.recommend_list');
        });

        getRequestToken();

        // get request token from backend
        function getRequestToken() {
            StartService.getRequestToken().then(function ( data ) {
                // save oauth_token, oauth_token_secret to requestToken
                requestToken = data;
            }, function ( error ) {
                console.error('Can\'t get request token');
                Toast.showToast(null, 'Can\'t get request token');
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
    }

})( angular.module('Pixes.start') );