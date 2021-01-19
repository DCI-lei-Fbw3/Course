const html = require("../../data/html");

module.exports = (req, res) => res.status(200).send(html.login);
