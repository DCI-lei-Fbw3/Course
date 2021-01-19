const db = require('../data/db');

module.exports = (req, res, next) => {
    if (db.token === 'not generated yet') res.redirect(401, '../');
    next();
}