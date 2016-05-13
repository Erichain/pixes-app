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
        '400': 'Bad Request!',
        '404': 'Can\'t find page!',
        '504': 'Gateway error!',

        /**
         * start module's message
         * 6 digit number, starting with 0
         * e.g. 000001
         */
        '000001': 'Get access token failed!',

        /**
         * recommend module's message
         * 6 digit number, starting with 1
         * e.g. 100001
         */
        '100001': 'Download Sucess!',
        '100002': 'Download Failed!',

        /**
         * explore module's message
         * 6 digit number, starting with 2
         * e.g. 200001
         */
        '200001': '',

        /**
         * create module's message
         * 6 digit number, starting with 3
         * e.g. 300001
         */
        '300001': 'Upload Success!',
        '300002': 'Upload Failed!',
        '300004': 'Success Deleted!',

        /**
         * me module's message
         * 6 digit number, starting with 4
         * e.g. 400001
         */
        '400001': 'Update Success!'
    });

})( angular.module('Pixes.common') );