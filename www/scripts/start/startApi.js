/**
 * @description api for start page and access
 * @module Pixes.start
 * @author Erichain
 * @date 2015-04-07
 */
(function ( Start ) {

    Start.constant('StartApi', {

        /* get request token */
        request: '/get_request',

        /* get access token */
        access: '/get_access'
    });

})( angular.module('Pixes.start') );