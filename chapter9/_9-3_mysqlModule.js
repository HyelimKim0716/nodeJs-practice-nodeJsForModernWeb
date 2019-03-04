const mysql = require('mysql');

// Database 연결
const client = mysql.createConnection({
    user: 'root',
    password: 'qwer6538',
    database: 'Company'
});

// Database 쿼리 사용
// client.query('USE Company', function (error, result, fields) {
//     if (error) {
//         console.log('쿼리 문장에 오류가 있습니다');
//     } else {
//         console.log(result);
//     }
//
// });

client.query('SELECT * FROM products', function (error, result, fields) {
    if (error) {
        console.log('쿼리 문장에 오류가 있습니다');
    } else {
        console.log(result);
    }

});

client.query('INSERT INTO products (name, modelNumber, series) VALUES (?, ?, ?)', [
    'Name Value', 'Model Number Value', 'Series Value'],
    function (error, results, fields) {
        if (error) {
            console.log('쿼리 문장에 오류가 있습니다');
        } else {
            console.log(result);
        }
});