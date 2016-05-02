/**
 * main implemention for app
 * creating server etc.
 */
var app = require('express')(),
    router = require('./routes/route').router;


app.use(function ( req, res, next ) {
    if ( req.method === 'OPTIONS' ) {
        console.log('OPTIONS Success');
    }

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With',
        'Access-Contrl-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
        'content-type': 'application/json'
    });

    next();
});

app.use(router);
exports.app = app;