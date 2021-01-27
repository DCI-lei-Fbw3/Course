const checkTokenInput = (req, res, next) => {
    // extract token from cookies in request
    const token = req.cookies.token;

    // check if token is provided
    if (!token) {
        return res.status(401).send("not authorized. please provide a valid token.");
    }

    res.locals = {};
    res.locals.token = token;
    next();
};

module.exports = checkTokenInput;
