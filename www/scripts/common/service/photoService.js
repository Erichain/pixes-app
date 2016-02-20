/**
 * @description service for camera
 * @module Pixes.common
 * @author Erichain
 * @date 2016-02-17
 */
(function ( Common ) {

    Common.service('PhotoService', PhotoService);
    PhotoService.$inject = ['$q', '$cordovaCamera'];

    function PhotoService( $q, $cordovaCamera ) {
        return {
            getPicture: getPicture
        };

        function getPicture( options ) {
            var defer = $q.defer();

            // invoke getPicture() function to invoke the camera device
            $cordovaCamera.getPicture(function ( result ) {
                defer.resolve(result);
            }, function ( err ) {
                defer.reject(err);
            }, options);

            return defer.promise;
        }
    }

})( angular.module('Pixes.common') );