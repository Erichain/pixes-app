/**
 * @description controller for start page
 * @module Pixes.start
 * @controller StartCtrl
 * @author Erichain
 * @date 2016-01-04
 */
(function ( Start ) {

    Start.controller('StartCtrl', StartCtrl);
    StartCtrl.$inject = ['$cordovaInAppBrowser', 'StartService'];

    function StartCtrl( $cordovaInAppBrowser, StartService ) {
        var vm = this,
            requestToken = {};

        vm.signIn = signIn;

        getRequestToken();

        // get request token from backend
        function getRequestToken() {
            StartService.getRequestToken().then(function ( data ) {

                // save oauth_token, oauth_token_secret to requestToken
                requestToken = data;
                console.log(requestToken);
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
                $cordovaInAppBrowser.open('https://www.flickr.com/services/oauth/authorize?oauth_token=' + requestToken.oauth_token, '_blank', options)
                    .then(function ( event ) {
                        //$cordovaInAppBrowser.close();
                    })
                    .catch(function ( event ) {

                    });
            }, false);
        }
    }

})( angular.module('Pixes.start') );