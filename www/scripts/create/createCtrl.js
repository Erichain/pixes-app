/**
 * @description create page's controller
 * @controller CreateCtrl
 * @module Pixes.create
 * @author Erichain
 * @date 2015-10-25
 */
(function ( create ) {

    create.controller('CreateCtrl', CreateCtrl);
    CreateCtrl.$inject = ['$ionicActionSheet', '$cordovaCamera'];

    function CreateCtrl( $ionicActionSheet, $cordovaCamera ) {
        var vm = this;

        vm.choosePhotoFromGalleryOrCamera = function () {
            choosePhotoFromGalleryOrCamera();
        };

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
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    popoverOptions: CameraPopoverOptions,
                    correctOrientation: true,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture( options ).then(function ( imgData ) {}, function ( error ) {});
            });

            return true;
        }

        // open device's camera to take photo
        function takePhoto() {
            $cordovaCamera.getPicture().then(function ( imgData ) {}, function ( error ) {});

            return true;
        }
    }

})( angular.module('Pixes.create') );