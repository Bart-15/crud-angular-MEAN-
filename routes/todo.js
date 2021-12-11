const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router()
const mongoose = require('mongoose');
require('../db/db')


const Todo = mongoose.model('Todo',{
    title : {
        type:String,
        required: true
    },
    completed : {
        type:Boolean,
        default: false
    }
})


// @route    POST api/todo
// @access   Public
router.post('/api/todo',  async (req, res) => {
    try { 
        if(!req.body.title) {
            return res.status(400).json({
                message: "Title field is required"
            })
        }
        const newTodo = new Todo({title:req.body.title})
        await newTodo.save()
        res.status(200).json({success:true})
    } catch(e) {
        res.status.apply(500).json()
    }
})

// @route    get api/get
// @desc     get all todo 
// @access   Public
router.get('/api/todo', async (req, res) => {
    try {
        const todo = await Todo.find({})
        res.status(200).json(todo)
    } catch(e) {
        res.status(400).json()
    }
})

// @route    get api/todo
// @desc     get single todo by id
// @access   Public
router.get('/api/todo/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    try {
        if(!todo) {
            return res.status(404).json({message: 'Todo not found.'})
        }

        res.status(200).json(todo)
    }catch(e) {
        res.status(400).json()
    }
})

// @route    delete api/todo
// @desc     get single todo by id
// @access   Public
router.delete('/api/todo/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({success:true})
})


// @route    patch api/todo
// @desc     update todo
// @access   Public
router.patch('/api/todo/:id', async (req, res) => {
    try{
        if(!req.body.title) {
           return res.status(400).json({message:'Todo field must not be empty.'})
        }
        const todo = await Todo.findByIdAndUpdate(req.params.id, {title:req.body.title}, {new:true})
        await todo.save()
        res.status(200).json({success:true})

    } catch(err){
        res.status(400).json()
    }
})


// @route    patch api/todo
// @desc     toggle update todo
// @access   Public
router.patch('/api/todo/completed/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    try {
        if(!todo) {
            return res.status(404).json({message: "Todo not found"})
        }   
        todo.completed = !todo.completed;
        await todo.save();
        res.status(200).json({success: true})

    }catch(err) {
        res.status(500).json()
    }
})


module.exports = router;
