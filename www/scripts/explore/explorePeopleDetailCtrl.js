/**
 * @description controller for explore people's detail
 * @controller ExplorePeopleDetailCtrl
 * @module Pixes.explore
 * @author Erichain
 * @date 2016-04-17
 */
(function ( Explore ) {

    Explore.controller('ExplorePeopleDetailCtrl', ExplorePeopleDetailCtrl);
    ExplorePeopleDetailCtrl.$inject = ['$scope', 'ExploreService'];

    function ExplorePeopleDetailCtrl( $scope, ExploreService ) {

        init();

        function init() {
            ExploreService.getPeopleDetail().then(function ( data ) {
                $scope.userInfo = data.result;
            }, function ( error ) {});
        }
    }

})( angular.module('Pixes.explore') );