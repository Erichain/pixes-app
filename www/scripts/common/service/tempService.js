/**
 * @description
 * service used to save data in a temp param
 * then carry it to other place or controller
 * @module Pixes.common
 * @author Erichain
 * @date 2016.02.21
 */
(function ( Common ) {

    Common.service('TempService', TempService);
    TempService.$inject = [];

    function TempService() {
        var service = {};

        // save the URI of choosed image before upload
        service.imgInfo = null;

        return service;
    }

})( angular.module('Pixes.common') );