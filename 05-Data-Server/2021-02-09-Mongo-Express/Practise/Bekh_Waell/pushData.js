
const {config} = require("dotenv");

var assert = require("assert")
var MongoClient = require("mongodb").MongoClient;
config();
var students = {
    first: "Bekhzod",
    second: "Waell",
    third: "Karl",
    group: "noobs"
};

function pusher(req,res,next) {
    MongoClient.connect("mongodb+srv://user-1:0802@cluster0.trrfg.mongodb.net/GroupProject?retryWrites=true&w=majority", (error,database) => {
        assert.equal(null,error)  // this module activates function ignoring error 
        // if (error) {
        //     throw error ---> this statement used when there is no assert.equal used 
        // }
        console.log("Connected to database...")

        //Actual manipulation going below
        const data = database.db("GroupProject")
        var dataCollection = data.collection("dataPusher")

        dataCollection.insertOne(students, (error,result) => {
            database.close()
        });
        console.log("Data added")
    });
    next()
}; 

module.exports = {pusher};