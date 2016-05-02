/**
 * Created by Erichain on 4/7/16.
 */
var getRequestToken = require('../modules/get_request_token').getRequestToken,
    getAccessToken = require('../modules/get_access_token').getAccessToken,
    getInterestingPhotos = require('../modules/get_interestingness_photos').getInterestingPhotos,
    getPhotoDetail = require('../modules/get_photo_detail').getPhotoDetail,
    getExplorePhotos = require('../modules/get_explore_photo').getExplorePhoto,
    interesting_photos = require('../data/recommend/interestingness_photos'),
    uploadPhoto = require('../modules/upload_file').uploadPhoto,
    router = require('express').Router();


// get request token
router.all('/get_request', function ( req, res ) {
    getRequestToken(req, res);
});

// get access token
router.all('/get_access', function ( req, res ) {
    getAccessToken(req, res);
});

// get photo's detail
router.all('/get_recommend_list', function ( req, res ) {
    res.send(interesting_photos.photos);
});


// get photo's detail
router.all('/get_recommend_detail', function ( req, res ) {
    getPhotoDetail(req, res);
});

// get interestingness photos, usually for unauthorizated users
router.all('/get_interesting_photos', function ( req, res ) {
    getInterestingPhotos(req, res);
});

// get my favorites
router.all('/get_my_favorites', function ( req, res ) {
    res.send(interesting_photos.photos);
});

// get my photos
router.all('/get_my_photos', function ( req, res ) {
    res.send(interesting_photos.photos);
});

// get explore photo list
router.all('/get_explore_photo', function ( req, res ) {
    getExplorePhotos(req, res);
});

// upload photo
router.all('/photo_upload', function ( req, res ) {
    uploadPhoto(req, res);
});

// get created photos
router.all('/get_created_photos', function ( req, res ) {
    res.send(interesting_photos.photos);
});

exports.router = router;
