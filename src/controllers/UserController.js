'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.all = function (req, res) {
    User.find({}, function(err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};

exports.create = function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};

exports.read = function (req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.update = function (req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.remove = function (req, res) {
    User.remove({_id: req.params.userId}, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'User successfully deleted' });
    });
};
