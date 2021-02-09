const express = require('express')
const router = express.Router()
const utf8 = require('utf8');
const convert = require('xml-js');
var request = require('request');

var url = 'http://openapi.gbis.go.kr/ws/rest/busstationservice';
var queryParams = '?ServiceKey' + `=${decodeURIComponent(process.env.KEY)}`; /* Service Key*/
queryParams += '&keyword=12'
console.log(queryParams)
router.get('/get', (req, res) => { // get 메소드 일때,
    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        console.log(body)
        res.json(body)  //  응답 보내기
    });
   
  })


module.exports = router ;