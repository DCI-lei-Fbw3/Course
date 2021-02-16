const errorHandler = (error, req, res, next) => {
    try {
        if (error.name === "ValidationError") return err = handleValidationError(err, res);
        if (error.code && error.code == 11000) return res.status(400).send(`Duplicate Key: ${error.keyValue.articleNo} already exists`);
    } catch (err) {
        res.status(500).send('An unknown error occurred.');
    }
};


module.exports = errorHandler;
