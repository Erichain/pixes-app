/**
 * @description content for toast message
 * @module Pixes.common
 * @author Erichain
 * @date 2016-03-12
 */
(function ( Common ) {

    Common.constant('toastMessage', {

        /**
         * public message, such as network message
         * 3 digit number
         * e.g. 504
         */
        '400': '',
        '404': '',
        '504': '',

        /**
         * access module's message
         * 6 digit number, starting with 0
         * e.g. 000001
         */
        '000001': 'Password can\'t be empty',

        /**
         * recommend module's message
         * 6 digit number, starting with 1
         * e.g. 100001
         */
        '100001': '',

        /**
         * explore module's message
         * 6 digit number, starting with 2
         * e.g. 200001
         */
        '200001': ''
    });

})( angular.module('Pixes.common') );