import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.unsubscribe(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// Avoid warning msg
mongoose.set('useCreateIndex', true); 

const MONGO_URI = 'mongodb://localhost/test';

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
