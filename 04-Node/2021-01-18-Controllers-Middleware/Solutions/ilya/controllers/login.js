const html = require("../data/html");

module.exports = (req, res) => {

    console.log('REQUEST:', req.body);

    res.status(200).send(html.landing);

}