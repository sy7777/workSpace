/**
 * 服务器入口文件
 * 负责：
 * 1：引入 http 模块，并创建http服务
 * 2：监听端口
 * 3：引入自定义的路由模块(router),将服务器对象转发至路由模块处理
 *
 * ===================
 * date：2020-08
 * author：西岭
 * copyright：传智播客 & 博学谷
 */

var http = require('http')
var fs = require('fs')
var template = require('art-template')
// 设置模板引擎加载页面的默认路径
template.defaults.root = './'
var server = http.createServer()

// // 引入请求处理模块（路由）

// server.on('request', function (request, response) {
//   // 判断请求路径处理
//   var urls = request.url
//   if (urls == '/') {
//     fs.readFile('./db.json', 'utf8', function (err, data) {
//       // 将数据与页面进行整合
//       var htmls = template('./view/index.html', { data: JSON.parse(data) })

//       response.end(htmls)
//     })
//   } else {
//     fs.readFile('.' + urls, function (error, data) {
//       response.end(data)
//     })
//   }
// })

server.listen('8080', function () {
  console.log('请打开浏览器访问 http://127.0.0.1:8080')
})
