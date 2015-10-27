/**
 * app's module definition
 *
 * @author Erichain
 * @date 2015-10-25
 */
(function ( angular, pixes ) {
    pixes.login = angular.module('Pixes.login', []);

    pixes.register = angular.module('Pixes.register', []);

    pixes.recommend = angular.module('Pixes.recommend', []);

    pixes.explore = angular.module('Pixes.explore', []);

    pixes.create = angular.module('Pixes.create', []);

    pixes.me = angular.module('Pixes.me', []);
})( angular, Pixes );