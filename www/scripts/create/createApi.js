/**
 * @description Create module's api
 * @module Pixes.create
 * @author Erichain
 * @date 2015-12-05
 */
(function ( Create ) {

    Create.constant('CreateApi', {

        /* upload photo */
        upload: '/photo_upload',

        /* get created photos */
        photos: '/get_created_photos'
    });

})( angular.module('Pixes.create') );
