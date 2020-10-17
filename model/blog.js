// import mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogScheam = new Schema({
    title : {
        type : String,
        required : true
    },
    discription : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Blog = mongoose.model('Blog', blogScheam);

module.exports = Blog;