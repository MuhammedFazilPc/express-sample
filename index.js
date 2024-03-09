const app=require("express")();

app.get('/',(req,res)=>{
    res.send('<h2>HI FRIEND</h2>')
})

const server= app.listen(8080,()=>{
    console.log("server started on port 8080")
})