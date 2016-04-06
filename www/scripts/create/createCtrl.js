/**
 * @description create page's controller
 * @controller CreateCtrl
 * @module Pixes.create
 * @author Erichain
 * @date 2015-10-25
 */
(function ( Create ) {

    Create.controller('CreateCtrl', CreateCtrl);
    CreateCtrl.$inject = ['$scope', '$location', '$ionicActionSheet', '$cordovaCamera', '$ionicPopup', 'TempService'];

    function CreateCtrl( $scope, $location, $ionicActionSheet, $cordovaCamera, $ionicPopup, TempService ) {
        var vm = this;

        vm.choosePhotoFromGalleryOrCamera = choosePhotoFromGalleryOrCamera;

        vm.confirmDelete = confirmDelete;

        // open the action sheet for user
        // to choose use photo from gallery or taking a photo
        function choosePhotoFromGalleryOrCamera() {
            $ionicActionSheet.show({
                buttons: [{
                    text: 'From Gallery'
                }, {
                    text: 'Take A Photo'
                }],
                titleText: 'Create A Creation',
                cancelText: 'Cancel',
                cancel: function () {},
                buttonClicked: function ( index ) {
                    var choices = {
                            '0': choosePhotoFromGallery,
                            '1': takePhoto
                        };

                    return choices[index]();
                }
            });
        }

        // open device's photo gallery
        function choosePhotoFromGallery() {
            document.addEventListener('deviceready', function () {
                var options = {
                    quality: 100,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    targetWidth: 365,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                };

                $cordovaCamera.getPicture( options ).then(function ( imgData ) {
                    $location.path('/tab/edit-photo');
                    vm.imgURI = 'data:image/jpeg;base64,' + imgData;
                }, function ( error ) {});
            }, false);

            return true;
        }

        // open device's camera to take photo
        function takePhoto() {
            $cordovaCamera.getPicture().then(function ( imgData ) {
                vm.imgURI = 'data:image/jpeg;base64,' + imgData;
            }, function ( error ) {});

            return true;
        }

        // popup for deleting or not
        function confirmDelete() {
            var options = {
                title: 'Confirm deleting',
                template: 'Are you sure to delete this item ?',
                okType: 'button-assertive'
            };

            $ionicPopup.confirm(options).then();
        }
    }

})( angular.module('Pixes.create') );