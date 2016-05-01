/**
 * @description controller for explore photo list
 * @controller ExplorePhotoListCtrl
 * @module Pixes.explore
 * @author Erichain
 * @date 2016-04-17
 */
(function ( Explore ) {

    Explore.controller('ExplorePhotoListCtrl', ExplorePhotoListCtrl);
    ExplorePhotoListCtrl.$inject = ['$scope', '$stateParams', 'ExploreService', '$ionicNavBarDelegate'];

    function ExplorePhotoListCtrl( $scope, $stateParams, ExploreService, $ionicNavBarDelegate ) {

        init();
        setNavTitle();

        // initialize
        function init() {
            var reqParams = {
                type: $stateParams.type
            };

            ExploreService.getPhotoListByType( reqParams ).then(function ( data ) {
                $scope.imgData = data;
            }, function ( error ) {});
        }

        // set title for navigation
        function setNavTitle() {
            var map = [
                'Nature', 'Sky', 'Snow', 'City', 'People', 'Micro',
                'Music', 'Baby', 'Old', 'Car', 'Landscape', 'Light'
            ];

            $scope.view_title = map[+$stateParams.type - 1];
        }

    }

})( angular.module('Pixes.explore') );