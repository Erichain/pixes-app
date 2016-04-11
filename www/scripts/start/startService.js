/**
 * @description service for start module
 * @module Pixes.start
 * @author Erichain
 * @date 2015-04-07
 */
(function ( Start ) {

    Start.service('StartService', StartService);
    StartService.$inject = ['RequestService', 'StartApi'];

    function StartService( RequestService, StartApi ) {

        /**
         * @description
         * get request token from Flickr
         * @param {object} params
         * @returns {promise}
         */
        this.getRequestToken = function ( params ) {
            return RequestService.post( StartApi.request, params );
        };

        /**
         * @description
         * get access token from Flickr
         * @param {object} params
         * @returns {promise}
         */
        this.getAccessToken = function ( params ) {
            return RequestService.post( StartApi.access, params );
        };

    }

})( angular.module('Pixes.start') );