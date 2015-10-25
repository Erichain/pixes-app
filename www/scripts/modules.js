/**
 * app's module definition
 *
 * @author Erichain
 * @date 2015-10-25
 */
(function ( angular, pixes ) {
    pixes.home = angular.module('Pixes.home', []);

    pixes.explore = angular.module('Pixes.explore', []);

    pixes.favorites = angular.module('Pixes.favorites', []);

    pixes.me = angular.module('Pixes.me', []);
})( angular, Pixes );