'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    //note the ./
    errorHandler = require('./errors'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    Artist = mongoose.model('Artist');
/**
 * Create an Artist
 */
exports.create = function(req, res) {
    console.log('Artist create');
    // Init Variables
    //var artist = new Artist(req.body);
    var artist = new Artist(req.body);
    var message = null;
    console.log('req.body', req.body);

    artist.provider = 'local';

    // save the artist
    artist.save(function(err) {
        if (err) {
            console.log(err);
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
                //message: 'feet'
            });
        } else {
            //console.log('artist.save ', artist);
            /*
            req.login(artist, function(err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.jsonp(artist);
                }
            });
            */
            res.jsonp(artist);
        }
    });
};

/**
 * Get Artists by UserID
 */
exports.get = function(req, res) {
    console.log('GET ARTISTS BY USER ID: ', req.user);
    /*
    Artist.findOne({
     addedBy: id
     }).exec(function(err, artist) {
     if (err) return next(err);
     if (!artist) return next(new Error('Failed to load Artist by userID' + id));
     next();
     });

    */
     Artist.find(function(err, artists) {
     if (err) {
        res.send(err);
     }

     res.jsonp(artists);
     });

};

/**
 * Show the current Artist
 */
exports.read = function(req, res) {

};

/**
 * Update a Artist
 */
exports.update = function(req, res) {

};

/**
 * Delete an Artist
 */
exports.delete = function(req, res) {

};

/**
 * List of Artists
 */
exports.list = function(req, res) {

};



/**
 * User middleware
 */
exports.artistByID = function(req, res, next, id) {
    Artist.findOne({
        _id: id
    }).exec(function(err, user) {
        if (err) return next(err);
        if (!user) return next(new Error('Failed to load Artist ' + id));
        //req.profile = user;
        next();
    });
};