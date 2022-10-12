const express = require("express");
const app = express();
// 导入路由模块
const router = require("./express.js");
// 注册路由模块,并添加统一的访问路径
app.use('/api', router)
// 监听客户端get 和post请求
app.get('/', (req,res)=>{
    // 默认情况下，req.query是一个空对象
    console.log(req.query);
    // res.send({name:"Baby",age:27})
})
app.get('/user', (req,res)=>{
    // 调用express的send方法，向客户端响应一个JSON对象
    res.send({name:"BOB",age:29})
})
app.post('/user', (req,res)=>{
    // 调用express的send方法，向客户端响应一个JSON对象
    res.send({name:"David",age:30})
})
app.listen(80, () => {
    console.log("express server running at http://127.0.0.1");
})