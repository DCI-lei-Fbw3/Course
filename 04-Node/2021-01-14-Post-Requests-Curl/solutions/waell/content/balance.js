const balance = (req,res) => {
    let amount = Math.floor(Math.random() * 1001);
    res.status(200).send(`Your Amount is ${amount}`);
    console.log(`Your Amount is ${amount}`);
};

module.exports = balance