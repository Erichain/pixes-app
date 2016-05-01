/**
 * @description
 * transfer filter used to transfer status code to text
 * @module Pixes.common
 * @author Erichain
 * @date 2016-01-24
 */
(function ( Common ) {

    Common.filter('dict', dict);
    dict.$inject = [];

    function dict() {
        var DICT = {
            'followOrNot': {
                '0': 'Follow',
                '1': 'Following'
            },
            'gender': {
                '0': '-',
                '1': 'male',
                '2': 'Female'
            }
        };

        /**
         * @param index data received from back
         * @param dictName
         */
        return function ( index, dictName ) {
            if ( dictName && typeof dictName === 'string' ) {
                return DICT[dictName][index];
            }
            return index;
        };
    }

})( angular.module('Pixes.common') );