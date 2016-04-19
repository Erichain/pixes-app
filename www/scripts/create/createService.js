/**
 * @description service for create
 * @module Pixes.create
 * @author Erichain
 * @date 2016-04-13
 */
(function ( Create ) {

    Create.service('CreateService', CreateService);
    CreateService.$inject = ['RequestService', 'CreateApi'];

    function CreateService( RequestService, CreateApi ) {

        /**
         * function to upload photo
         * @param params
         * @returns {*|HttpPromise}
         */
        this.uploadPhoto = function ( params ) {};

        /**
         * function to update photo's info
         * @param params
         * @returns {*|HttpPromise}
         */
        this.updatePhotoInfo = function ( params ) {};

        /**
         * function to delete photo
         * @param params
         * @returns {*|HttpPromise}
         */
        this.deletePhoto = function ( params ) {};

    }

})( angular.module('Pixes.create') );