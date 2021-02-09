/* 
This middleware script should have all the functions for the MongoDb CRUD
operations. 
We will use node's assert module: https://nodejs.org/api/assert.html#assert_assert
Strict mode 
*/

var assert = require('assert');
var MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://taimur:halle.2020@fbw3.3ltlj.mongodb.net/test?retryWrites=true&w=majority";

//can't use getRandomInt because its not avaiable--> its a p5.js function
/* var randomX = getRandomInt(0, 800);
var randomY = getRandomInt(0, 600);
var randomRadius = getRandomInt(10, 80); */
var date = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '');

var mongoLog = {
  time: date,
  x: "5",
  y: "7",
  radius: "57"
};

//In the best practices, the MongoDB conection should happen at the server level (app.js)


/* 
@Create Function
*/
const create = (req, res, next) => {
    MongoClient.connect(url, function (err, database){
      assert.equal(null, err);
      console.log("MongoDB connected to server...")

      //!!!!!!!!CHANGE STRINGS
      const db1 = database.db('test')
      var col = db1.collection('test');
      //Insert the results, and close the connection
      col.insertOne(mongoLog, function(err, result){
        database.close();
      });     
        //start the application after the database connection is ready
      //app.listen(3000);
      console.log("Data added...")
      })
    next();
}

/* 
@Read Function
*/

const read = (req, res, next) => {
  MongoClient.connect(url, function (err, database){
    assert.equal(null, err);
    console.log("MongoDB connected to server...")

    //!!!!!!!!CHANGE STRINGS
    const db1 = database.db('test')
    var col = db1.collection('test');
    //Insert the results, and close the connection
    col.find({}).toArray(function(err, docs){
      assert.equal(err, null);
      console.log("Found the following records..");
      console.log(docs);
      database.close();
    });     
      //start the application after the database connection is ready
    //app.listen(3000);
    })
  next();
}

module.exports = { create, read}