var request = require('unirest');
var questions = require('./mockApi/questions.js');

function getQuestions(req,res){
    var  response =  {
        "test":"yoooo"
    };
    res.send(questions);
    
}
module.exports = {
    getQuestions:getQuestions
}