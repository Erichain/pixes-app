/**
 * @description router for create
 * @module Pixes.create
 * @author Erichain
 * @date 2016-01-10
 */
(function ( Create ) {

    Create
        .config([
            '$stateProvider', '$urlRouterProvider',
            function ( $stateProvider, $urlRouterProvider ) {

                $stateProvider
                    .state('tab.create', {
                        url: '/create',
                        views: {
                            'tab-create': {
                                templateUrl: 'views/create/create.html',
                                controller: 'CreateCtrl as create'
                            }
                        }
                    })
            }]);

})( angular.module('Pixes.create') );