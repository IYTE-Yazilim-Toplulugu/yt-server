var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var db = require("./configs/db.js");
var config = require("./configs/cors.js");
const memberRouter = require('./routes/member/memberRouter.js');
const adminRouter = require('./routes/admin/adminRouter.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(config));

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Yazılım Topluluğu Server' });
});


// const fs = require('fs');
// app.get('/getusers', function(req, res, next) {
//   db.query("SELECT phone FROM members", (err, result) => {
//     if (err) {
//         console.log(err.message);
//         res.status(400).send("ERROR");
//     }
//     // console.log(result);
//     result.map(ress => {
//       fs.appendFile("result.txt", ress.phone + "\n", (err, data) => {
//         if (err) throw err;
//       });
//     });
//     res.status(200).json(result);
//   });
//   // res.render('index', { title: 'Yazılım Topluluğu Server' });
// });

app.use("/api/members", memberRouter);
app.use("/api/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
