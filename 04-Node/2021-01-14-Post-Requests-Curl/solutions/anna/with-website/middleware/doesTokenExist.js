module.exports = (req, res, next) => {
  if (!req.body.token)
    return app.status(400).send("Invalid. Please enter a token.");
  next();
};
