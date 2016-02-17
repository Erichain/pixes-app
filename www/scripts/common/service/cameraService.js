/**
 * service for camera
 *
 * @module Pixes.common
 * @author Erichain
 * @date 2016-02-17
 */
(function ( Common ) {

    Common.service('CameraService', CameraService);
    CameraService.$inject = ['$q'];

    function CameraService( $q ) {
        return {
            getPicture: getPicture
        };

        function getPicture( options ) {
            var defer = $q.defer();

            if ( window.cordova ) {
                navigator.camera.getPicture(function ( result ) {
                    defer.resolve(result);
                }, function ( err ) {
                    defer.reject(err);
                }, options);
            }

            return defer.promise;
        }
    }

})( angular.module('Pixes.common') );