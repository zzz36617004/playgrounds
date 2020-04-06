const express = require('express');
const app = express();
const debug = require('debug');
const favicon = require('serve-favicon');
const compression = require('compression');

const router = require('./router/main.js')(app, __dirname);
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(compression());                         //압축 사용
app.use(express.static('public'));              //정적 파일 사용하기 위해

const server = app.listen(3001, () => {
  console.log(`3001번 port에 http server를 띄웠습니다.`);
});

