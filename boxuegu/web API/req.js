// 导入express
const express = require("express");
// 创建web服务器
const app = express();
// 调用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
})
app.get("/",(req,res)=>{
    // 默认情况下。req是一个空对象，req.query可以获取到客户端发送过来的查询参数
    console.log(req.query);
    res.send(req.query)
})
// :id是一个动态的参数：后面可以任意命名，可以多个动态参数"/user/:id:/user"
app.get("/user/:id",(req,res)=>{
    // req.params是动态匹配到的URL参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params)
})