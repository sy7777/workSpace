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
var server = http.createServer()
var fs = require('fs')
var url = require('url')
var template = require('art-template')
// 设置模板引擎加载页面的默认路径
template.defaults.root = './'
// 引入请求处理模块（路由）
// var router = require('./router');
// router.start(server);
server.on('request', function (request, response) {
  // 判断请求路径处理
  var url_obj = url.parse(request.url, true)

  var method = request.method
  if (method == 'GET') {
    if (url_obj.pathname == '/') {
      // response.end('1')
      // 调用业务逻辑
      // controller.index(request, response)
      fs.readFile('./db.json', 'utf8', function (err, data) {
        // 将数据与页面进行整合
        var htmls = template('./view/index.html', { data: JSON.parse(data) })
        // console.log(htmls);
        response.end(htmls)
      })
    } else if (url_obj.pathname == '/getuser') {
      // 获取id参数
      var id = url_obj.query.id
      // controller.getUser(request, response, id)
      fs.readFile('./db.json', 'utf8', function (err, data) {
        var userdata = JSON.parse(data)
        for (let i = 0; i < userdata.length; i++) {
          if (userdata[i].id == id) {
            var userinfo = userdata[i]
          }
        }
        // 将数据与页面进行整合
        var htmls = template('./view/user.html', { data: userinfo })
        // console.log(htmls);
        response.end(htmls)
      })
    } else {
      fs.readFile('.' + url_obj.pathname, function (error, data) {
        response.end(data)
      })
    }
  } else if (method == 'POST') {
    res.end('不支持post')
  } else {
    res.end('不支持' + method)
  }
})
server.listen('8080', function () {
  console.log('请打开浏览器访问 http://127.0.0.1:8080')
})
