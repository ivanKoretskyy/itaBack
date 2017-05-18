let express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;
  mongoose = require('mongoose');
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser'),
  cors = require('cors');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Userdb3');


  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());

  let routes = require('./api/routes/userRoutes');
  routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);