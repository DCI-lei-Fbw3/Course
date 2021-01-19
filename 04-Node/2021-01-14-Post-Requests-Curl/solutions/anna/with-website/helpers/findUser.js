let userData = require("../userData");

function findUser(token) {
  return userData.find((user) => user.currentToken === token);
}

module.exports = findUser;
