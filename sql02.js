const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({  
  host     : 'localhost',
  user     : 'root',
  password : 'doudou121',
  database : 'cms' });

// 把 connection.query() 函数转换为返回 Promise 的函数
const queryAsync = util.promisify(connection.query).bind(connection);

// 在 async/await 函数中使用同步风格的查询
async function fetchData() {

  try {
    const results = await queryAsync('SELECT * FROM cms_content WHERE type_id = 1');
    // console.log('datebase ',results);
    // connection.end();
    return results;
  } catch (error) {
    console.error(error);
  }
}

// fetchData();

module.exports.query2 = fetchData;
