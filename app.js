var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();
var swimTimes = require('./middleware/swim-times');

var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

router.use('/profile/:teamId/:userId', swimTimes.getSwimmerTimes);

app.use('/', router);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(testMiddleware());
app.get('/:teamId', indexRouter);

//app.get('/profile/:userId', swimTimes.getSwimmerTimes, profileRouter);
app.get('/profile/:teamId/:userId', profileRouter);
app.get('/favicon.ico', (req, res) => res.status(204));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Woops!';

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var testMiddleware = function(req, res, next) {
  console.log('testMiddleware...');
  next();
}