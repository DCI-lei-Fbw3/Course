// import the 3rd party module
const axios = require("axios");

// define the request we are going to make:
// in this case we combine the hostname, port and path and name it "url"
// and with the method we tell the server what we want to do with the resource
const options = {
    url: "http://cat-fact.herokuapp.com/facts",
    method: "get",
};

// with axios.interceptors.request.use() you can run code between the call of axios
// and the actual request that gets send out to the url
//
// Request => Interceptor => Response
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return error;
    },
);

// with axios.interceptors.response.use() you can run code between the response
// and the ".then()" or ".catch()" part of your axios call
//
// Response => Interceptor => Request
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return error;
    },
);


// execute the request with our options asynchronously
// then process the response in .then() or catch an error with .error()
// the response will already be parsed as JSON (or any type of content you requested)
axios(options)
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        throw error;
    });
