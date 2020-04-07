'use strict';

const v1 = '/api/v1';

module.exports = function (app) {
    var user = require('../controllers/UserController');

    app.route(`${v1}/users`)
        .get(user.all)
        .post(user.create);

    app.route(`${v1}/users/:userId`)
        .get(user.read)
        .put(user.update)
        .delete(user.remove)
};
