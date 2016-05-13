/**
 * @description controller for recommend detail page
 * @module Pixes.recommend
 * @author Erichain
 * @date 2016-02-21
 */
(function ( Recommend ) {

    Recommend.controller('recommendDetailCtrl', recommendDetailCtrl);
    recommendDetailCtrl.$inject = [
        '$ionicPopup',
        '$stateParams',
        'RecommendService',
        '$cordovaFileTransfer',
        'Toast',
        '$timeout',
        '$ionicLoading'
    ];

    function recommendDetailCtrl(
        $ionicPopup,
        $stateParams,
        RecommendService,
        $cordovaFileTransfer,
        Toast,
        $timeout,
        $ionicLoading
    ) {
        var vm = this;

        vm.leaveComment = leaveComment;
        vm.starPhoto = starPhoto;
        vm.downloadPhoto = downloadPhoto;

        // initialize
        vm.comments = [];
        vm.isStar = false;

        getDetail();

        // get photo's detail info
        function getDetail() {
            var reqParams = {
                photo_id: $stateParams.img_id
            };

            // initialize
            vm.photoInfo = {};

            RecommendService.getPhotoDetail(reqParams).then(function ( data ) {
                vm.photoInfo = data;

                // user comments
                vm.comments = data.comment;
            }, function ( error ) {});
        }

        // leave comment
        function leaveComment() {
            var options = {
                title: 'Leave A Comment',
                inputType: 'text',
                inputPlaceholder: 'Leave your comment to author',
                cancelText: 'Cancel',
                okText: 'OK',
                okType: 'button-general'
            };

            $ionicPopup.prompt(options).then(function ( res ) {
                if ( res ) {
                    $ionicLoading.show({
                        template: '<ion-spinner icon="ripple"></ion-spinner>'
                    });

                    $timeout(function () {
                        $ionicLoading.hide();

                        vm.comments.push({
                            iconurls: {
                                medium: 'https://c2.staticflickr.com/8/7674/buddyicons/47919595@N02_m.jpg?1431563398#47919595@N02'
                            },
                            authorname: 'Erichain',
                            _content: res
                        });
                    }, 1000);
                }
                else {
                    // do nothing
                }
            });
        }

        // star a photo
        function starPhoto() {
            vm.isStar = !vm.isStar;
        }

        // down a photo
        function downloadPhoto() {
            document.addEventListener('deviceready', function () {
                var url = $stateParams.img_url,
                    filename = url.split('/').pop(),
                    targetPath = cordova.file.documentsDirectory + filename,
                    trustHosts = true,
                    options = {};

                $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function ( data ) {
                    Toast.showToast('100001');
                }, function ( error ) {
                    Toast.showToast('100002');
                }, function ( progress ) {

                });
            });
        }
    }

})( angular.module('Pixes.recommend') );