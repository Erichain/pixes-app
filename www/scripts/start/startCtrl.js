/**
 * @description controller for start page
 * @module Pixes.start
 * @controller StartCtrl
 * @author Erichain
 * @date 2016-01-04
 */
(function ( Start ) {

    Start.controller('StartCtrl', StartCtrl);
    StartCtrl.$inject = ['$cordovaInAppBrowser'];

    function StartCtrl( $cordovaInAppBrowser ) {
        var vm = this;

        vm.signIn = signIn;

        vm.signUp = signUp;

        function signIn() {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };

            // open the flickr page to sign in
            document.addEventListener('deviceready', function () {
                $cordovaInAppBrowser.open('https://www.flickr.com/services/oauth/authorize?oauth_token=', '_blank', options)
                    .then(function ( event ) {

                        $cordovaInAppBrowser.close();
                    })
                    .catch(function ( event ) {

                    });
            }, false);
        }

        function signUp() {}
    }

})( angular.module('Pixes.start') );