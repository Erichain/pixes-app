/**
 * @description filter for spliting string
 * @module Pixes.common
 * @author Erichain
 * @date 2016-04-19
 */
(function ( Common ) {

    Common.filter('split', split);
    split.$inject = [];

    function split() {
        return function ( str, options ) {
            if ( typeof options !== 'object' || options === {} || typeof str !== 'string') {
                return;
            }
            return str.split(options.seperator)[options.count];
        };
    }

})( angular.module('Pixes.common') );