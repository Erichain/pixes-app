/**
 * @description app's modules
 * @author Erichain
 * @date 2015-10-25
 */
(function ( angular ) {
    angular.module('Pixes', [
        'ionic',
        'ngCordova',
        'Pixes.start',
        'Pixes.recommend',
        'Pixes.explore',
        'Pixes.create',
        'Pixes.me',
        'Pixes.common'
    ]);
})( angular );