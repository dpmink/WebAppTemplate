var mysql = require('mysql');
var main = require('../config/main');
//var dbConnect = mysql.createConnection(main.configDB);

var model = {

  dbConnect : null,
  user : {
    ID : "1",
    Username : "test",
    Password : "test",
    Name : "",
    CreateDate : ""

  },

  connect : function(callback){
    dbConnect = mysql.createConnection(main.configDB);
    dbConnect.connect(function(err){
      console.log(err);
      callback(err);
    });
  },

  getAll : function(callback){
    sql = "select * from User";
    dbConnect.query(sql,function(err,data){

      callback(err,data);
    });
  },

  getByID : function(id,callback){
    sql = "select * from User where ID ="+id;
    dbConnect.query(sql,function(err,data){

      callback(err,data);
    });
  }



}


module.exports = model;
