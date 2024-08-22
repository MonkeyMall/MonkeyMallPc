var express = require('express')
var logger = require('morgan')
var path = require('path')
var compression = require('compression')

// 创建Web服务器
var app = express()
// 启用日志
app.use(logger('dev'))
// 启用压缩
app.use(compression())

// 配置静态资源路径
app.use(express.static(path.join(__dirname, '/dist')))

// 监听8080端口
app.listen('8080')
console.log('Loaded PRO Front On ')
