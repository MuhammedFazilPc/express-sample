const app=require("express")();

require("dotenv").config()
app.get('/',(req,res)=>{
    res.send('<h2>HI FRIEND</h2>')
})

const server= app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT} `)
})