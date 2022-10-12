const express = require("express");
const app = express();
// 定义全局中间件形式
app.use((req,res,next)=>{
    // 
    const time = Date.now();
    // 为req对象，挂载自定义属性，从而把时间共享给后面所有的路由
    req.startTime = time;
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