const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

// Database 연결
const client = mysql.createConnection({
    user: 'root',
    password: 'qwer6538',
    database: 'Company'
});

// 서버 생성
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

// 서버 실행
app.listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});

// 라우트 수행
app.get('/', function (request, response) {
    fs.readFile('_9-4_crudList.html', 'utf8', function (error, data) {
        client.query('SELECT * FROM products', function (error, results) {
            response.send(ejs.render(data, {
                data: results
            }));
        });
    });
});

app.get('/delete/:id', function (request, response) {
    client.query('DELETE FROM products WHERE id=?', [request.params.id], function () {
        response.redirect('/');
    })
});

app.get('/insert', function (request, response) {
    fs.readFile('_9-4_curdInsert.html', 'utf8', function (error, data) {
        response.send(data);
    })
});

app.post('/insert', function (request, response) {
    const body = request.body;

    client.query('INSERT INTO products (name, modelNumber, series) VALUES (?, ?, ?)', [
        body.name, body.modelNumber, body.series
    ], function () {
        response.redirect('/');
    })
});

app.get('/edit/:id', function (request, response) {
    fs.readFile('_9-4_crudEdit.html', 'utf8', function (error, data) {
        client.query('SELECT * FROM products WHERE id=?', [
            request.params.id
        ], function (error, result) {
            response.send(ejs.render(data, {
                data: result[0]
            }));
        });
    });
});

app.post('/edit/:id', function (request, response) {
    const body = request.body;

    client.query('UPDATE products SET name=?, modelNumber=?, series=? WHERE id=?', [
        body.name, body.modelNumber, body.series, request.params.id
    ], function () {
        response.redirect('/');
    })
});