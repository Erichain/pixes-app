/**
 * @description Explore module's api
 * @module Pixes.explore
 * @author Erichain
 * @date 2015-12-05
 */
(function ( Explore ) {

    Explore.constant('ExploreApi', {

        /* get explore people's list */
        people: '/get_explore_people',

        /* get photo list */
        photo: '/get_explore_photo'
    });

})( angular.module('Pixes.explore') );
