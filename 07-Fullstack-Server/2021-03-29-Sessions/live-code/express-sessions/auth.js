const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    //   get the token from the authorization header
    //Your JWT token will always be in the request.headers.authorization

    const token = await request.cookies.session;

    //check if the token matches the supposed origin
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

    // retrieve the user details of the logged in user
    const user = await decodedToken;

    // pass the the user down to the endpoints here
    request.user = user;

    // pass down functionality to the endpoint
    next();
    
  } catch (error) {
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
