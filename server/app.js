const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const venuesRouter = require('./routes/venues');
const eventsRouter = require('./routes/events');
const sportsRouter = require('./routes/sports');
const teamsRouter = require('./routes/teams');
const favouriteEventsRouter = require('./routes/favouriteEvents');
const jwtAuthRouter = require("./routes/jwtAuth");
const searchRouter = require('./routes/search');
const menusRouter = require('./routes/menus');
const categoriesRouter = require('./routes/categories');




const app = express();
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/venues', venuesRouter(dbHelpers));
app.use('/api/events', eventsRouter(dbHelpers));
app.use('/api/sports', sportsRouter(dbHelpers));
app.use('/api/teams', teamsRouter(dbHelpers));
app.use('/api/search',searchRouter(dbHelpers));
app.use('/api/menus', menusRouter(dbHelpers));
app.use('/api/favouriteEvents',favouriteEventsRouter(dbHelpers));
app.use('/api/categories', categoriesRouter(dbHelpers));


app.use("/api/auth", jwtAuthRouter);


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
  console.log('err',err);
  res.json(err);
});

module.exports = app;
