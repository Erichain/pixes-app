/**
 * @description
 * transfer filter used to transfer status code to text
 * @module Pixes.common
 * @author Erichain
 * @date 2016-01-24
 */
(function ( Common ) {

    Common.filter('transfer_dict', transfer_dict);
    transfer_dict.$inject = [];

    function transfer_dict() {
        var DICT = {
            'followOrNot': {
                '0': 'Follow',
                '1': 'Following'
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
            else {
                return index;
            }
        }
    }

})( angular.module('Pixes.common') );