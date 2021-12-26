const express = require('express');
const morgan = require('morgan');
const user = require('./router/user');
const home = require('./router/home');
const notFound = require('./router/notFound');

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(express.static('public'));

const middleware1 = (req, res, next) => {
  console.log('middleware1');
  req.test = 'test metni';
  next();
};

const middleware2 = (req, res, next) => {
  console.log('middleware2 test: ', req.test);
  next();
};

app.use(middleware1);
app.use(middleware2);

app.use('/users', user);
app.use('/', home);

app.use(notFound);

app.listen(2000, () => {
  console.log('2000 port listening...');
});
