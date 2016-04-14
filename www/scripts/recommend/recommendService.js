/**
 * @description service for recommend
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-01-10
 */
(function ( Recommend ) {

    Recommend.service('RecommendService', RecommendService);
    RecommendService.$inject = ['RequestService', 'RecommendApi'];

    function RecommendService( RequestService, RecommendApi ) {

        /**
         * get photos list
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getPhotosList  = function ( params ) {
            return RequestService.post( RecommendApi.list, params );
        };

        /**
         * get interesting photos
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getInterestingPhotos = function ( params ) {
            return RequestService.post( RecommendApi.interesting, params );
        };
    }

})( angular.module('Pixes.recommend') );