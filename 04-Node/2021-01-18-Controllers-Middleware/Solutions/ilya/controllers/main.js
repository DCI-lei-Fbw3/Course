module.exports = (req, res) => {

    const genHTML = require('../html/genHTML');
    const global = require('../variables/global');

    res.status(200).send(genHTML('landing', global));

}