/**
 * Created by Erichain on 4/17/16.
 */
var interesting_photos = require('../data/recommend/interestingness_photos');

function getInterestingPhotos( req, res ) {
    res.send(interesting_photos.photos);
}

exports.getInterestingPhotos = getInterestingPhotos;