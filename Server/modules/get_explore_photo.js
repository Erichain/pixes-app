/**
 * Created by Erichain on 4/26/16.
 */
var explorePhotos = require('../data/explore/explore_photos');

function getExplorePhoto( req, res ) {
    var body = [],
        reqParams = {};

    req.on('data', function ( data ) {
        body.push(data);
    });

    req.on('end', function () {
        var data = Buffer.concat(body).toString();

        try {
            reqParams = JSON.parse(data);
        }
        catch ( e ) {}

        console.log('Req Content:' + JSON.stringify(reqParams));

        // get detail info
        res.send(explorePhotos[reqParams.type]);
    });
}

exports.getExplorePhoto = getExplorePhoto;