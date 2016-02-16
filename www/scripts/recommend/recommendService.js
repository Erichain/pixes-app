/**
 * service for recommend
 *
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-01-10
 */
(function( Recommend ) {

    Recommend.service('RecommendService', RecommendService);
    RecommendService.$inject = ['RequestService', 'RecommendApi'];

    function RecommendService( RequestService, RecommendApi ) {
        return {
            getPhotosList: getPhotosList
        };

        /**
         * get photos list
         * @param params
         * @returns {*|HttpPromise}
         */
        function getPhotosList( params ) {
            return RequestService.post(RecommendApi.recommend.list, params);
        }
    }

})( angular.module('Pixes.recommend') );