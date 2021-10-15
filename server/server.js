import express from 'express';
import debug from 'debug';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import compression from 'compression'
import path from 'path';
import router from './router.js'
import connector from './connector';

const app = express();

app.unsubscribe(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(favicon(path.resolve(__dirname, '../src/assets/favicon.ico')));
app.use(compression());                         //압축 사용
app.use(express.static('dist'));              //정적 파일 사용하기 위해

app.use('/books', router);

const server = app.listen(3001, () => {
  console.log(`3001번 port에 http server를 띄웠습니다.`);
});

