const express = require("express")
const con = require("./connect_db")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello world !!")
})

app.get("/showall",(req,res)=>{

    con.query("SELECT * from booking",(err,result)=>{
            if (err) throw err;
            res.send(result);
        }); 
    
})

app.listen(3000,()=>{
    console.log("listening at port 3000 ...")
})