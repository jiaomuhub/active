//数据库
var mongoose = require('mongoose');
// 连接本地mongodb ，本机的ip 127.0.0.1，端口：27017 数据库：dbname
mongoose.connect("mongodb://127.0.0.1:27017/test",function(err){
    if(!err){//如果连接成功，则打印出connected to Mongodb
        console.log("connected to Mongodb");
    }else{
        throw err;//如果连接失败，则抛出异常
    }
});
module.exports=mongoose;
