/**
 * @description Me module's api
 * @module Pixes.me
 * @author Erichain
 * @date 2015-12-05
 */
(function ( Me ) {

    Me.constant('MeApi', {

        /* update profile */
        profile: '/update_profile',

        /* get user's photos */
        photos: '/get_my_photos',

        /* get user's followers */
        followers: '/get_my_followers',

        /* get user's followings */
        following: '/get_my_followings',

        /* get user's favorites */
        favorites: '/get_my_favorites'

    });

})( angular.module('Pixes.me') );
