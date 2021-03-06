const path = require("path");
const randomToken = require("random-token");

function authenticateUser(req, res) {
  const enteredIBAN = req.body.IBAN;
  const enteredPIN = req.body.PIN;
  res.myDataClient
    .collection("account")
    .findOne({ IBAN: enteredIBAN, PIN: enteredPIN }, (err, result) => {
      if (err) {
        res.status(400).send("Database error. Please try again.");
        return;
      }
      if (result === null) {
        res.status(400).send("Incorrect IBAN or PIN. Please try again.");
        return;
      }

      const token = randomToken(16);
      res.myDataClient
        .collection("account")
        .updateOne(
          { _id: result._id },
          { $set: { currentToken: token } },
          (err, result) => {
            if (err) throw err;
            res.cookie("data", token);
            res
              .status(200)
              .sendFile(path.join(__dirname, "../html/banking.html"));
          }
        );
    });
}

module.exports = authenticateUser;
