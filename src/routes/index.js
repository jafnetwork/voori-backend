module.exports = function(app) {
require('./auth')(app);
require('./user')(app);
};