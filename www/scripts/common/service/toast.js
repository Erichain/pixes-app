/**
 * @description service for toaster
 * @module Pixes.common
 * @author Erichain
 * @date 2016-03-12
 */
(function ( Common ) {

    Common.service('Toast', Toast);
    Toast.$inject = ['$cordovaToast', 'toastMessage'];

    function Toast( $corvodaToast, toastMessage ) {

        this.showToast = showToast;

        /**
         * function used to show toast message
         * @param messageID     messageID defined in toastMessage
         * @param message       message content
         * @param duration      message's last time
         * @param position      message's position
         * @usage
         * 1. if a messageID exists, use the content defined in toastMessage
         *    Toast.showToast('00001);
         * 2. if want to use a custom message, then use it like:
         *    Tosate.showToast(null, 'this is a custom message')
         */
        function showToast( messageID, message, duration, position ) {
            var config = {
                message: message || '',
                messageID: messageID || '',
                duration: duration || 'short',
                position: position || 'bottom'
            };

            $corvodaToast.show(toastMessage[config.messageID] || config.message, config.duration, config.position);
        }

    }

})( angular.module('Pixes.common') );