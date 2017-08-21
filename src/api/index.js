var express = require("express");
var request = require('unirest');
var questionCtrl = require('./questionnaireCtrl.js');


function getlocation(req,res){
  console.log("asdsa");
  var param = req.query;
  var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+req.query.latitude+","+req.query.longitude+"&key=AIzaSyBWkCGw0LYLC_gQEF3ScnZsfR1Ixdlxwuc";
  request.get(url)
    .end(function (response) {
        res.send(response);
    });
}


function getlocationByIp(req,res){
  var param = req.query.name;
  console.log(param);
  //https://maps.googleapis.com/maps/api/place/autocomplete/json?input=brindavan%20n&offset=7&components=country:IN&location=12.9773348,77.5667917&strictbounds&radius=30000&key=AIzaSyBWkCGw0LYLC_gQEF3ScnZsfR1Ixdlxwuc4

  var url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+param+"&offset=7&components=country:IN&location=12.9773348,77.5667917&strictbounds&radius=30000&key=AIzaSyBWkCGw0LYLC_gQEF3ScnZsfR1Ixdlxwuc";
  request.get(url)
    .end(function (response) {
        res.send(response);
    });
}


module.exports = function() {

  var router = express.Router();

  router.get('/getLoc', getlocation);
  router.get("/getLocationByIp",getlocationByIp);
  router.get("/getquestions",questionCtrl.getQuestions);

   return router;
};