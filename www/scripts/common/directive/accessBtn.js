/**
 * used to controll whether content to be shown
 *
 * @module Pixes.common
 * @author Erichain
 * @date 2015-11-01
 */
(function ( Common ) {
    Common.directive('accessBtn', accessBtn);
    accessBtn.$inject = [];

    function accessBtn () {
        return {
            restrict: 'AE',
            link: function ( scope, ele, attr ) {
                var $elem = $(ele);
                $elem.click(function () {
                    if ( $(this).text() === 'Sign In' ) {
                        $('.login-content').addClass('animated fadeIn');
                        $('.before-content').addClass('fadeOut hide-ele');
                    }
                    else if ( $(this).text() === 'Sign Up' ) {

                    }
                });
            }
        }
    }
})( angular.module('Pixes.common') );
