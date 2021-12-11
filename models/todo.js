const mongoose = require('mongoose')

const Schema = mongoose.Schema;


// not working schema

const TodoSchema = new Schema({
    title : {
        type:String,
        required: true
    },
    completed : {
        type:Boolean,
        default: false
    }
})


// const Todo = mongoose.model({
//     title:String,
//     completed:Boolean,
// })

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = {Todo};