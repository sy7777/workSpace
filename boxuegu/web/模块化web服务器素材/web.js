const fs = require('fs');
const http = require('http');
const path = require('path');
const server = http.createServer();
var template = require('art-template')
// 设置模板引擎加载页面的默认路径
template.defaults.root = './'
const fileFath = path.join(__dirname, "./db.json");
server.on('request', (req, res) => {
    const url = req.url;
    let content = "404 not found";
    if (url === "/" || url === "/index.html") {
        content = "<h1>首页</h1>"
    } else if (url === "./about.html") {
        content = "<h1>关于页面</h1>"
    }
    // 防止乱码，设置响应头
    res.setHeader('Content-Type', "text/html; charset=utf-8");

    const method = req.method;
    const str = `your url : ${url}, your method: ${method}`;

    fs.readFile(fileFath, (err, data) => {
        if (err) {
            res.end(err);
        }
        // 将数据与页面进行整合
        // var htmls = template('./index.html', { data: JSON.parse(data) })
        // 向客户端响应一些内容res.end();
        res.end( data);
    });
    // console.log(__dirname);
    // console.log(data);

})
server.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});
// var http = require('http')
// var server = http.createServer()
// var fs = require('fs')
// var url = require('url')
// var template = require('art-template')
// // 设置模板引擎加载页面的默认路径
// template.defaults.root = './'
// // 引入请求处理模块（路由）
// // var router = require('./router');
// // router.start(server);
// server.on('request', function (request, response) {
//   // 判断请求路径处理
//   var url_obj = url.parse(request.url, true)

//   var method = request.method
//   if (method == 'GET') {
//     if (url_obj.pathname == '/') {
//       // response.end('1')
//       // 调用业务逻辑
//       // controller.index(request, response)
//       fs.readFile('./db.json', 'utf8', function (err, data) {
//         // 将数据与页面进行整合
//         var htmls = template('./view/index.html', { data: JSON.parse(data) })
//         // console.log(htmls);
//         response.end(htmls)
//       })
//     } else if (url_obj.pathname == '/getuser') {
//       // 获取id参数
//       var id = url_obj.query.id
//       // controller.getUser(request, response, id)
//       fs.readFile('./db.json', 'utf8', function (err, data) {
//         var userdata = JSON.parse(data)
//         for (let i = 0; i < userdata.length; i++) {
//           if (userdata[i].id == id) {
//             var userinfo = userdata[i]
//           }
//         }
//         // 将数据与页面进行整合
//         var htmls = template('./view/user.html', { data: userinfo })
//         // console.log(htmls);
//         response.end(htmls)
//       })
//     } else {
//       fs.readFile('.' + url_obj.pathname, function (error, data) {
//         response.end(data)
//       })
//     }
//   } else if (method == 'POST') {
//     res.end('不支持post')
//   } else {
//     res.end('不支持' + method)
//   }
// })
// server.listen('80', function () {
//   console.log('请打开浏览器访问 http://127.0.0.1')
// })

