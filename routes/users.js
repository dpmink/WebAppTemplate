var express = require('express');
var router = express.Router();
var model = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.connect(function(){
    model.getAll(function(err,data){

      res.json(data);
    });

  });
});

router.get('/Edit/:id', function(req, res, next) {
  var id = req.params.id;

  model.connect(function(){
    model.getByID(id,function(err,data){

      if(data.length>0){
        res.json(data[0].ID);
      }else{

        res.send("no data");
      }

    });

  });
});

module.exports = router;
