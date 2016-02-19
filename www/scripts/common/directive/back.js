/**
 * @description directive used to go back one step of the history
 * @name back
 * @module Pixes.common
 * @author Erichain
 * @date 2016-02-19
 */
(function ( Common ) {

    Common.directive('back', back);
    back.$inject = [];

    function back() {
        return {
            restrict: 'A',
            link: function ( scope, elem, attr ) {
                elem.bind('click', goBack);

                function goBack() {
                    history.back();
                    scope.$apply();
                }
            }
        };
    }

})( angular.module('Pixes.common') );