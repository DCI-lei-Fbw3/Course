const balance = 0;
let user = require('./user.js');

const details = (req, res) => {
    console.log(user.token);

    if (!req.body.iban || !req.body.pincode) {
        return res.status(400).send("no credentials provided.");
    }
    else if (req.body.iban == 'DE100' && req.body.pincode == '1234') {

        res.status(200).send(`Your token is: ${user.token} and is ready for use ${user[0].title}. ${user[0].surname}`)
    }
    else if (req.body.iban == 'DE111' && req.body.pincode == '12') {

        //res.status(200).send(`Welcome Mrs.Schmit, your token is: ${user.token}`)
        res.status(200).send(`Your token is: ${user.token} and is ready for use ${user[1].title}. ${user[1].surname}`)
    }

    else {
        res.status(400).send('Access Denied!')
    }
}

module.exports = { details, balance };
