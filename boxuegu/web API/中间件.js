const express = require("express");
const app = express();
// app.use定义全局中间件形式
app.use((req,res,next)=>{
    // 
    console.log("只是最简单的中间件函数");
    const time = Date.now();
    // 为req对象，挂载自定义属性，从而把时间共享给后面所有的路由
    req.startTime = time;
    // 必须调用
    next()
})
app.get('/user', (req,res)=>{
    // 调用express的send方法，向客户端响应一个JSON对象
    res.send({name:"BOB",age:29}, req.startTime)
})
app.post('/user', (req,res)=>{
    // 调用express的send方法，向客户端响应一个JSON对象
    res.send({name:"David",age:30})
})
app.listen('80',()=>{
    console.log("http://127.0.0.1");
})