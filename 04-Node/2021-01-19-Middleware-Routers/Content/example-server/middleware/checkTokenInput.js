const checkTokenInput = (req, res, next) => {
    // extract token from body
    const token = req.body.token;

    // check if token is provided
    if (!token) {
        return res.status(401).send("not authorized. please provide a valid token.");
    }

    res.myValues = {};
    res.myValues.token = token;
    next();
};

module.exports = checkTokenInput;
