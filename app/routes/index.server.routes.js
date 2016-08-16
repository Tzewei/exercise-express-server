module.exports = function(app) {
  // MIDDLEWARE FOR ROUTING
  // var index = require('../controllers/index.server.controller');
  // var about = require('../controllers/about.server.controller');
  // var contact = require('../controllers/contact.server.controller');

  var staticPageController = require('../controllers/staticpage.server.controller');
  var usersController = require('../controllers/users.server.controller');
  var profilesController = require('../controllers/profiles.server.controller');

  // ACTUAL ROUTING

// Domain on the different side is not able to access data from each other. Server have to
// allow access for the domain to do it. This is to Allow different domain to access data
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  app.get('/', staticPageController.renderHome);
  app.get('/about', staticPageController.renderAbout);
  app.get('/contact', staticPageController.renderContact);

  app.get('/users', usersController.index);
  app.get('/profiles', profilesController.index);

 };
