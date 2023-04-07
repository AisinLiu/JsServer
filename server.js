var http = require("http")
var url = require("url")

var sql = require('./sqlTool');
var sql2 = require('./sql02');

http.createServer(function (request, response)  {

    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    

    (async() => {
        // response.write((await getDatabase().tost));
        response.end(await getDatabase());
    })();
    
}).listen(8888);


async function getDatabase() {

    let re;
    re = await sql2.query2();
    let str = JSON.stringify(re);
    return str;
  
}