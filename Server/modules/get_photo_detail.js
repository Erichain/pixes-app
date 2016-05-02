/**
 * Created by Erichain on 4/18/16.
 */
var photo_info = require('../data/recommend/photo_detail');

// get the request client from the client
function getPhotoDetail( req, res ) {
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
        res.send(photo_info[26367953022]);
    });
}

exports.getPhotoDetail = getPhotoDetail;