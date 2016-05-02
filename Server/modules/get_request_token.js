/**
 * authentication for app
 * use oauth and flickr api
 */
var Oauth = require('mashape-oauth').OAuth,
    Api500px = require('api_500px'),
    API_key = require('../config.json').api_key,
    api = new Api500px({
            key: API_key.key,
            secret: API_key.secret,
            callback: ''
        });

// get request token from Flickr
/*function getRequestToken( req, res ) {
    var oa = new Oauth({
        requestUrl: 'https://www.flickr.com/services/oauth/request_token',
        consumerKey: API_key.key,
        consumerSecret: API_key.secret,
        signatureMethod: 'HMAC-SHA1',
        version: '1.0',
        callback: ''
    });

    oa.getOAuthRequestToken(function ( error, oauth_token, oauth_token_secret, results ) {
        var requestParams = {};

        if ( error ) {
            throw new Error(error);
        }

        requestParams = {
            oauth_token: oauth_token,
            oauth_token_secret: oauth_token_secret,
            oauth_callback_confirmed: results.oauth_callback_confirmed
        };

        // out put the info
        console.log('RequestToken: ', oauth_token, oauth_token_secret, results);

        // send the request token from Flickr to client
        res.end(JSON.stringify(requestParams));
    });
}*/

// get request token from 500px
function getRequestToken( req, res ) {
    api.authRequest(function ( err, authToken, authSecret, results ) {
        var requestParams = {};

        if ( err ) {
            console.error('Can\'t get request token !');
            throw new Error(err);
        }

        // redirect client to OAuth page
        requestParams = {
            oauth_token: authToken,
            oauth_token_secret: authSecret,
            oauth_callback_confirmed: results.oauth_callback_confirmed
        };

        console.log(JSON.stringify(requestParams));

       res.send(requestParams);
    });
}

exports.getRequestToken = getRequestToken;