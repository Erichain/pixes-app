/**
 * @description
 * controller for photo editing and uploading
 * @module Pixes.create
 * @author Erichain
 * @date 2016.02.21
 */
(function ( Create ) {

    Create.controller('uploadPhotoCtrl', uploadPhotoCtrl);
    uploadPhotoCtrl.$inject = [
        '$location',
        '$timeout',
        '$ionicLoading',
        'Toast',
        'TempService',
        '$cordovaFileTransfer',
        'CreateService'
    ];

    function uploadPhotoCtrl(
        $location,
        $timeout,
        $ionicLoading,
        Toast,
        TempService,
        $cordovaFileTransfer,
        CreateService
    ) {
        var vm = this;

        vm.uploadPhoto = uploadPhoto;

        function uploadPhoto() {
            var reqParams = angular.merge({}, vm.photoInfo, TempService.imgInfo);

            document.addEventListener('deviceready', function () {
                var uploadOptions = new FileUploadOptions(),
                    server = 'http://0.0.0.0:9022/photo_upload',
                    imgPath = TempService.imgInfo.imgPath;

                uploadOptions.fileKey = 'file';
                uploadOptions.fileName = imgPath.substr(imgPath.lastIndexOf('/') + 1);
                uploadOptions.mimeType = 'image/jpeg';
                uploadOptions.chunkedMode = false;

                $cordovaFileTransfer.upload( server, imgPath, uploadOptions )
                    .then(function ( result ) {
                        $ionicLoading.show({
                            template: '<ion-spinner icon="ripple"></ion-spinner>'
                        });
                        $timeout(function () {
                            CreateService.uploadPhoto({
                                url_c: imgPath
                            });
                            Toast.showToast('300001');
                            $ionicLoading.hide();
                            $location.path('/tab/create');
                        }, 1000);
                    }, function ( error ) {
                        Toast.showToast('300002');
                    }, function ( progress ) {

                    });

            }, false);
        }
    }

})( angular.module('Pixes.create') );