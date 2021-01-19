function displayBalance(req, res) {
  res.myDataClient
    .collection("account")
    .findOne({ currentToken: req.body.token }, (err, result) => {
      if (err) return res.status(400).send("Account not found");
      res.status(200).send(`${result.balance}`);
    });
}

module.exports = displayBalance;
