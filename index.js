const express = require('express');
const app = express();
// app.use(express.json()) 
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo')
const cors = require('cors')
require('dotenv').config({ path: './.env' })

const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
app.use(todoRouter)



app.listen(PORT, () => {
    console.log('listening on port ' +PORT)
})