/**
 * @description Service for explore
 * @module Pixes.explore
 * @author Erichain
 * @date 2016-01-23
 */
(function ( Explore ) {

    Explore.service('ExploreService', ExploreService);
    ExploreService.$inject = ['RequestService', 'ExploreApi'];

    function ExploreService( RequestService, ExploreApi ) {

        /**
         * get explore people's list
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getPeopleList = function ( params ) {
            return RequestService.post( ExploreApi.explore.list.people, params );
        };
    }

})( angular.module('Pixes.explore') );