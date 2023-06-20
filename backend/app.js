
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const MessagesRouter = require('./routes/messages');
const connectDB = require('./database/main');

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const {User, Messages} = require('./database/models/index');

User.hasMany(Messages, {foreignKey: 'toId'})
User.hasMany(Messages, {foreignKey: 'fromId'})

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', MessagesRouter);

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

server.listen(3000, () => {
  connectDB.connectDB();
  console.log('listening on *:3000');
});

module.exports = app;
