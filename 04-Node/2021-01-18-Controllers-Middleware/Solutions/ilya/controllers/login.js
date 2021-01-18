module.exports = (req, res) => {

    console.log('REQUEST:', req.body);

    const genHTML = require("../html/genHTML");

    const global = require("../variables/global.js");

    if (req.body.iban === "1234" && req.body.pin === "123") {
        global.token = Math.floor(Math.random() * 10000000000000000);
        res.status(200).send(genHTML('loggedIn', global));
    } else {
        res.status(401).send(genHTML('invalidLogIn', global));
    }

}