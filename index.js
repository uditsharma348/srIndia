const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
// const bodyParser = require('body-parser');
require("./src/db/connection");
const User = require("./src/models/user")

app.use(express.json());


app.post("/signup",(req,res)=>{
    // res.send("hello this is signup page");
    const userdata = new User(req.body);
    userdata.save().then((err,resp)=>{
        res.send(userdata)
    }).catch((e)=>{
        res.send(e);
    })
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})


