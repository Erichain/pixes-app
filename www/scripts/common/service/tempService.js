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
        // save the URI of choosed image before upload
        this.imgInfo = null;
    }

})( angular.module('Pixes.common') );