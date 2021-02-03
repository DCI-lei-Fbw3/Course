const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  
    log('req.cookies');

    const token = req.cookies.token;

    if (!token) {
        return res.status(403).send('line: 8');
    }

    jwt.verify(token, secret, (error, payload) => {

        if (error) return res.status(403).send('line: 59');

        res.locals.user = payload;
     
        next();
    })
}