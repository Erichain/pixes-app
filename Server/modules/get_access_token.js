/**
 * authentication for app
 * to get the access token
 */
var Oauth = require('mashape-oauth').OAuth,
    API_key = require('../config.json').api_key;

// get the request client from the client
function getRequestParams( req, res ) {
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
    });

    console.log('Req Content:' + reqParams );
    return reqParams;
}

// get access token from Flickr
function getAccessToken( req, res ) {
    var oa = new Oauth({
            accessUrl: 'https://www.flickr.com/services/oauth/access_token',
            consumerKey: API_key.key,
            consumerSecret: API_key.secret,
            signatureMethod: 'HMAC-SHA1',
            version: '1.0',
            callback: ''
        }),
        requestParams = getRequestParams(req, res);

    oa.getOAuthAccessToken({
        oauth_verifier: requestParams.oauth_verifier,
        oauth_token: requestParams.oauth_token
    }, function ( error, token, secret, result ) {
        if ( error ) {
            throw new Error(error);
        }

        console.log('AccessToken: ', token, secret, result);
    });
}

exports.getAccessToken = getAccessToken;