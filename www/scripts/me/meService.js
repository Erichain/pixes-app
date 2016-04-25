/**
 * @description service for me
 * @module Pixes.me
 * @author Erichain
 * @date 2016-04-13
 */
(function ( Me ) {

    Me.service('MeService', MeService);
    MeService.$inject = ['RequestService', 'MeApi'];

    function MeService( RequestService, MeApi ) {

        /**
         * function to get user's brief info
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUserInfo = function ( params ) {
            return RequestService.post( MeApi.userInfo, params );
        };

        /**
         * function to get user's favorite photos list
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUsersFavorites = function ( params ) {
            return RequestService.post( MeApi.favorites, params );
        };

        /**
         * function to get user's bought photos list
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUsersBought = function ( params ) {
            return RequestService.post( MeApi.favorites, params );
        };

        /**
         * function to get user's followers
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUsersFollowers = function ( params ) {
            return RequestService.post( MeApi.followers, params );
        };

        /**
         * function to get user's followings
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUsersFollowings = function ( params ) {
            return RequestService.post( MeApi.following, params );
        };

        /**
         * function to get photos created by user
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUsersPhotos = function ( params ) {
            return RequestService.post( MeApi.photos, params );
        };

        /**
         * function to update user's info
         * @param params
         * @returns {*|HttpPromise}
         */
        this.updateUserInfo = function ( params ) {
            return RequestService.post( MeApi.profile, params );
        };

    }

})( angular.module('Pixes.me') );