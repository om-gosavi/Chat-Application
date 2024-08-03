import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app =express();
const PORT=process.env.PORT ||3000

app.get("/",(req,res)=>{
    res.send("hello om!")
})

app.listen(PORT,()=>{
    console.log("server is running at port "+ PORT)
})