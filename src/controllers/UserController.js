'use strict';

exports.all = function (req, res) {
    res.send(['Jose Alvarez', 'Emilio Caccia'])
};

exports.create = function (req, res) {
    res.send('Usuario creado con exito');
};

exports.update = function (req, res) {
    res.send('Usuario actualizado con exito');
};

exports.remove = function (req, res) {
    res.send('Usuario eliminado con exito');
};

exports.getById = function (req, res) {
    res.send('Jose Alvarez');
};
