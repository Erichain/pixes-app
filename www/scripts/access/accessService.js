/**
 * Access Service
 *
 * @module Pixes.access
 * @author Erichain
 * @date 2015-11-14
 */
(function( Access ) {

    Access.service('AccessService', AccessService);

    AccessService.$inject = ['RequestService', 'api'];

    function AccessService( RequestService, api ) {
        return {
            signIn: signIn,
            signUp: signUp,
            resetPassword: resetPassword
        };

        /**
         * Sign In Function
         *
         * @param params
         * @returns {*}
         */
        function signIn( params ) {
            return RequestService.post( api, params );
        }

        /**
         * Sign Up Function
         *
         * @param params
         * @returns {*}
         */
        function signUp( params ) {
            return RequestService.post( api, params );
        }

        /**
         * Reset Password Function
         *
         * @param params
         * @returns {*}
         */
        function resetPassword( params ) {
            return RequestService.post( api, params );
        }
    }

})( angular.module('Pixes.access') );