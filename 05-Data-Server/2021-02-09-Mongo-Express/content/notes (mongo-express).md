# Notes on Mongo-Express CRUD app
Reference: https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find

- You can do the same thing with Mongoose and MongoClient. However, it is important to understand what each offer. 

- MongoClient is the Node js driver for MongoDb written by MongoDb themselves.

- Whereas, Mongoose is a private project, and is known to be a Object Document Mapper (ODM). This mapping of objects makes life a bit easier for developers in certain projects with large Schemas and variable data. 


***Creating objects in DB***

- Create function will handle the entry of a data object into our database.
- In mongodb, we can create objects using insertOne or InsertMany methods.

***Reading objects from DB***

- Reading here is a subsitute word for querying. 
- A query is an operation that returns data from the database based on a 
set of parameters.
- In mongodb, we can read o jects using find() method.
- The find() method takes two OPTIONAL arguments:
    1. query, 
    2. projection

- Projection:  Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. For details: https://docs.mongodb.com/manual/reference/method/db.collection.find/#find-projection



# To-Dos

- Please create the Update and Delete endpoints in the Mongo-Express app
- Please compare the new MongoClient CRUD script with the Mongoose CRUD from the "Mongoose.js" file from 2021-02-04
- Read: https://developer.mongodb.com/article/mongoose-versus-nodejs-driver/
