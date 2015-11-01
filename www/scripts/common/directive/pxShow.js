/**
 * used to controll whether content to be shown
 *
 * @module Pixes.common
 * @author Erichain
 * @date 2015-11-01
 */
(function ( Common ) {
    Common.directive('pxShow', pxShow);
    pxShow.$inject = [];

    function pxShow () {
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
                        $('.reg-content').addClass('animated fadeIn');
                        $('.before-content').addClass('fadeOut hide-ele');
                    }
                });
            }
        }
    }
})( angular.module('Pixes.common') );
