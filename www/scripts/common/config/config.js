/**
 * global config
 *
 * @module Pixes.common
 * @author Erichain
 * @date 2015-10-31
 */

(function ( Common ) {

    Common.service('config', config);
    config.$inject = [];

    function config() {
        return {
            API_ROOT_URL: 'http://api.pixes.me/json'
        };
    }

})( angular.module('Pixes.common') );