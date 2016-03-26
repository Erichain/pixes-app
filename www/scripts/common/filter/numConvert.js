/**
 * @description
 * filter used to convert big number to scientific notation
 * @module Pixes.common
 * @author Erichain
 * @date 2016-02-20
 */
(function ( Common ) {

    Common.filter('numconvert', numconvert);
    numconvert.$inject = ['$filter'];

    function numconvert( $filter ) {
        return function ( index ) {
            if ( index >= 1000 && index <= 9999 ) {
                return $filter('number')(index / 1000, 1) + 'K';
            }
            else if ( index > 10000 ) {
                return $filter('number')(index / 10000, 1) + 'W';
            }
            else {
                return index;
            }
        }
    }

})( angular.module('Pixes.common') );