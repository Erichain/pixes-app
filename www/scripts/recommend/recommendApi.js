/**
 * @description Recommend module's api
 * @module Pixes.recommend
 * @author Erichain
 * @date 2015-12-05
 */
(function ( Recommend ) {

    Recommend.constant('RecommendApi', {

        /* get recommend list */
        list: '/get_recommend_list',

        /* get photo's detail info */
        detail: '/get_recommend_detail',

        /* get photo's comments */
        comments: '/get_comments',

        /* make a comment to a photo */
        comment: '/make_comment',

        /* if not authorized, get interesting photos */
        interesting: '/get_interesting_photos'
    });

})( angular.module('Pixes.recommend') );
