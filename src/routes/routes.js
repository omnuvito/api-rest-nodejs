const v1 = '/api/v1';
const userRoutes = require('./user');

module.exports = app =>{
    app.use(v1, userRoutes);
};
