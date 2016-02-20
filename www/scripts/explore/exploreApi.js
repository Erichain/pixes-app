/**
 * @description Explore module's api
 * @module Pixes.explore
 * @author Erichain
 * @date 2015-12-05
 */
(function ( Explore ) {

    Explore.constant('ExploreApi', {
        explore: {
            list: {
                people: '/explore/list/people'
            }
        }
    });

})( angular.module('Pixes.explore') );
