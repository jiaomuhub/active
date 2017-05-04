var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
var mongoose=require("./commonDB.js");
var Schema = mongoose.Schema;
//通过Schema创建一个模式NewsSchema
var newsSchema  = new Schema({
    name: String
});
//创建两个model newsSchemaModel用于新增和修改
var newsSchemaModel = mongoose.model("web",newsSchema,"web");
//newsSchemaQueryModel用于查询
var newsSchemaQueryModel= mongoose.model("web");//用于查询的模型
//接收前台传过来的数据，并保存到数据库
//路由控制
router.get('/home', function (req, res) {
    res.render('home', { title: '登录' })
});
router.get('/action', function (req, res) {
    res.render('action', { title: '登录' })
});
//
router.get('/edit', function (req, res) {
    newsSchemaQueryModel.find(function (err,data) {
        if(!err){
            res.send(data)
        }else{
            alert("sorry 突发故障")
        }

    })
});
module.exports = router;
