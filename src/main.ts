import express, { Application } from 'express'
import mongoose from 'mongoose';
import { photo } from './routes/photo.route';
import bodyParser from 'body-parser';
const app:Application=express();
app.use(bodyParser.urlencoded({extended:true}))
const port = 4000 

// COnnecting to mongoDB
mongoose.connect('mongodb+srv://akshaykumarm:8n3X8QE4A8NpPRYe@food.v940b0t.mongodb.net/').then(()=>{
    console.log('Connected to DB');
}).catch((error)=>{
    console.log(error);
})

// Routes
app.use('/photo',photo)

// Serving express app 
app.listen(port,()=>{
    console.log('Connected to 4000');
})

