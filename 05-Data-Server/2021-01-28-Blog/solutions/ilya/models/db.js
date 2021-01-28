const log = console.log;

const mongoose = require('mongoose');

const uri = '<insert custom mongoDB uri>';

const { Schema } = mongoose;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    comment: {
        type: String,
        required: true
    },
    commentDate: {
        type: Date,
        required: true
    }
});

/* connects collection of mongoDB with the present schema */
const Comment = mongoose.model('comments', commentSchema);

/**
 * async function to connect to the db
 */
const connect = async () => {
    try {
        if (mongoose.connection.readyState === 1) return;
        return await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        })
    } catch (e) { log('Error occurred: ', e) }
}

/**
 * function to add a comment to the db
 * @param {Object} wraps the parameters in an object
 * @param {String} name 
 * @param {String} email 
 * @param {String} comment 
 * @param {Date}   commentDate 
 */
const addComment = async ({ name, email, comment, commentDate }) => {
    try {
        await connect();
        const newComment = new Comment({ name, email, comment, commentDate });
        const savedComment = await newComment.save();
    } catch (e) { log('Error occurred: ', e) }
}

/**
 * function to get all comments from the db
 */
const getComments = async () => {
    try {
        await connect();
        const comments = await Comment.find();
        return comments;
    } catch (e) { log('Error occurred: ', e) }
}

module.exports = { addComment, getComments }