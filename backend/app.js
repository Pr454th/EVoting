const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());
app.use('/',(req,res)=>{
  res.send('hello world');
  console.log("hello world");
})

app.listen(3000,()=>{
  console.log("server is running on port 3000");
});