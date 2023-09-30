const express = require('express')
const routerReview = require('./routes/Routes.review')
const mongoose=require('mongoose')
require('dotenv').config();

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.method + " " + req.path)
    next()
})

app.use("/review", routerReview);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT, ()=>{
    console.log("listening to PORT")
})  
})



