const express = require("express")
const port = 8000
const app = express()
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const notesRouter = require('./routes/noteRouter');
const cors=require("cors");

dotenv.config({path: "./config.env"})

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

mongoose.connect(DB,{
    useNewUrlParser: true
}).then(() => console.log("DB connection is successful"))
.catch((err) => console.log(err))


app.use(express.json())
app.use(express.static(`${__dirname}/public`));




  const corsOptions ={
     origin:'*', 
     credentials:true,            //access-control-allow-credentials:true
     optionSuccessStatus:200,
  }
  
  app.use(cors(corsOptions))
  
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});



//Routes
app.get("/", (req, res) => {
    res.send("Welcome to our Express server")
})

app.use("/notes", notesRouter)


app.listen(port, (req,res) => {
    console.log(`Server is up and running at port ${port}`)
})

