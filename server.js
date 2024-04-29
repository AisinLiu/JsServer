/*
 * @Author: Sean season.xiao@yuanqu-tech.com
 * @Date: 2023-04-04 11:54:49
 * @LastEditors: Sean season.xiao@yuanqu-tech.com
 * @LastEditTime: 2024-04-26 18:50:14
 * @FilePath: /JsServer/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var http = require("http")
var url = require("url")
var querystring = require('querystring')
var sql2 = require('./sql02');
var verify1 = require('./verifyToken');
const { log } = require("console");

http.createServer(function (request, response)  {

    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    let method = request.method;
    if(method == "POST") {
         
        var params = '';     
        request.on('data', function(data){    
            params += data.toString();
        });
        request.on('end',function(){
            const postBody = querystring.parse(params);
            console.log(postBody);
            handleUrl(request,response,postBody);
        })
       
    }else {
        var params = url.parse(request.url, true).query;
        handleUrl(request,response,params);
    }
    
}).listen(8888);

function handleUrl(request,response,params) {


    switch (request.url) {
        case '/data':
            (async() => {
                response.end(await getDatabase());
            })();
            break;
        case '/set':
            
            response.end(JSON.stringify(params));
            break;
        case '/verify':
            (async() => {
                var token = params['token'];
                var action = params['action'];
                response.end(await verify(token,action));
            })();
            break;
        default:
            response.end('API不存在');
            break;
    }
}

async function getDatabase() {

    let re;
    re = await sql2.query2();
    let str = JSON.stringify(re);
    return str;
  5
}

async function verify(token,action) {

    let score;
    score = await verify1.vToken(token,action);
    let str = JSON.stringify({'success':score!=null?true:false,'value':{'score':score}});
    return str;
  
}