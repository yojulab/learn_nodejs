const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/subview', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/subview.html'));
});
router.get('/external', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// var http = require('http');
// //서버를 실행한다.
// http.createServer(app).listen(port, function () {
//     console.log('Server running at http://127.0.0.1:3000');
// });
