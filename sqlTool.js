var mysql  = require('mysql');

function getConnection() {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'doudou121',
        database : 'cms'
      });
    return connection;
}

function sql_query(callback) {
    var connection = getConnection();
    connection.connect();
 

    connection.query('SELECT * FROM cms_content WHERE type_id = 1', function (error, results, fields) {
      if (error){
        callback(error);
      } 
      else {
        callback(results);
        console.log('The query is: ', results);
      }
    });
    connection.end();
   
}

exports.query = sql_query;