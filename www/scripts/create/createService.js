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
        var _photos = [];

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
        this.getCreatedPhotos = function ( params ) {
            return RequestService.post( CreateApi.photos, params );
        };

        /**
         * get photos from uploaded
         */
        this.getPhotos = function () {
            return _photos;
        };

        /**
         * save the uploaded photos to a array
         * @param photoInfo
         */
        this.uploadPhoto = function ( photoInfo ) {
            _photos.push(photoInfo);
        };

        /**
         * remove photo from uploaded
         */
        this.removePhoto = function () {
            _photos.pop();
        };
    }

})( angular.module('Pixes.create') );