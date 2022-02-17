const express=require('express');
const Cors=require("cors");
const app=express();
const port=process.env.PORT||5000;
require('./db/conn')
app.use(Cors({
    origin:"*",
}))
app.use(express.json());

app.use(require('./Routers/router'));
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(port,()=>{
    console.log("running on port",port);
})