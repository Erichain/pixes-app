/**
 * @description create page's controller
 * @controller CreateCtrl
 * @module Pixes.create
 * @author Erichain
 * @date 2015-10-25
 */
(function ( Create ) {

    Create.controller('CreateCtrl', CreateCtrl);
    CreateCtrl.$inject = [
        'CreateService',
        '$location',
        '$ionicActionSheet',
        '$cordovaCamera',
        '$ionicPopup',
        'TempService',
        '$ionicLoading',
        'Toast',
        '$timeout'
    ];

    function CreateCtrl(
        CreateService,
        $location,
        $ionicActionSheet,
        $cordovaCamera,
        $ionicPopup,
        TempService,
        $ionicLoading,
        Toast,
        $timeout
    ) {
        var vm = this;

        // initialize photos array
        vm.createdPhotos = [];
        vm.choosePhotoFromGalleryOrCamera = choosePhotoFromGalleryOrCamera;
        vm.confirmDelete = confirmDelete;

        init();

        // get user's created photos if existed
        function init() {
            CreateService.getCreatedPhotos().then(function ( data ) {
                vm.createdPhotos = data.photo.slice(70, 72).concat(CreateService.getPhotos());
            }, function ( error ) {

            });
        }

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
                    vm.imgURI = 'data:image/jpeg;base64,' + imgData;
                    TempService.imgInfo = {
                        imgPath: vm.imgURI
                    };
                    $location.path('/tab/edit-photo');
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

            $ionicPopup.confirm(options).then(function ( res ) {
                if ( res ) {
                    $ionicLoading.show({
                        template: '<ion-spinner icon="ripple"></ion-spinner>'
                    });
                    $timeout(function () {
                        vm.createdPhotos.pop();
                        CreateService.removePhoto();
                        Toast.showToast('300004');
                        $ionicLoading.hide();
                    }, 1000);
                }
                else {
                    // do nothing
                }
            });
        }
    }

})( angular.module('Pixes.create') );