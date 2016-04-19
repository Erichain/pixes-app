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

        /**
         * get photo's detail
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getPhotoDetail = function ( params ) {
            return RequestService.post( RecommendApi.detail, params );
        };

        this.postComment = function ( params ) {};

        this.downloadPhoto = function ( params ) {};

        this.starPhoto = function ( params ) {};

        this.followUser = function ( params ) {};
    }

})( angular.module('Pixes.recommend') );