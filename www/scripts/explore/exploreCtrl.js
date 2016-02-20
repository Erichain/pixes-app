/**
 * @description explore page's controller
 * @controller ExploreCtrl
 * @module Pixes.explore
 * @author Erichain
 * @date 2015-10-25
 */
(function ( Explore ) {

    Explore.controller('ExploreCtrl', ExploreCtrl);
    ExploreCtrl.$inject = ['ExploreService'];

    function ExploreCtrl( ExploreService ) {
        var vm = this;

        getPeopleList();

        function getPeopleList() {
            var reqContent = {};

            ExploreService.getPeopleList( reqContent ).then(function ( data ) {
                vm.explorePeopleData = data.result;
            });
        }
    }

})( angular.module('Pixes.explore') );
