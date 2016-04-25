/**
 * @description
 * service used to get/set user info
 * @module Pixes.common
 * @author Erichain
 * @date 2016.04.25
 */
(function ( Common ) {

    Common.service('UserService', UserService);
    UserService.$inject = [];

    function UserService() {

        var _userInfo = {
            username: 'Erichain',
            brief_intro: 'Life is beautiful',
            gender: 1
        };

        this.getInfo = function () {
            return _userInfo;
        };

        this.setInfo = function ( info ) {
            if ( typeof info !== 'object' ) {
                return;
            }

            _userInfo = angular.merge({}, _userInfo, info);
        };

    }

})( angular.module('Pixes.common') );