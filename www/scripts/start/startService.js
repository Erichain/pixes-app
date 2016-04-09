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

        this.getRequestToken = function ( params ) {
            return RequestService.post( StartApi.request, params );
        };

    }

})( angular.module('Pixes.start') );