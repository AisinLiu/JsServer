var http = require("http")
var url = require("url")
var querystring = require('querystring')
var sql2 = require('./sql02');
const { log } = require("console");

http.createServer(function (request, response)  {

    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    let method = request.method;
    if(method == "POST") {
         
        var params = '';     
        request.on('data', function(data){    
            params += data;
        });
        request.on('end',function(){
            params = querystring.parse(params);
          
            handleUrl(request,response,params);
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
            console.log(params['type']);
            response.end(JSON.stringify(params));
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
  
}