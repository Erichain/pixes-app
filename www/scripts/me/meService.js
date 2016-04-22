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
        this.getUsersFavorites = function ( params ) {};

        /**
         * function to get user's followers
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUsersFollowers = function ( params ) {};

        /**
         * function to get user's followings
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUsersFollowings = function ( params ) {};

        /**
         * function to get photos created by user
         * @param params
         * @returns {*|HttpPromise}
         */
        this.getUsersPhotos = function ( params ) {};

        /**
         * function to update user's info
         * @param params
         * @returns {*|HttpPromise}
         */
        this.updateUserInfo = function ( params ) {};

    }

})( angular.module('Pixes.me') );