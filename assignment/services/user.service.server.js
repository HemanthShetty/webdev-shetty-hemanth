module.exports = function(app,model) {

  var passport=require('passport');
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));
  
  app.post('/api/user', createUser);
  app.post('/api/register', register);
  app.get('/api/user', findUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);
  app.post('/api/login', passport.authenticate('local'), login);

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByCredentials({'username':username,'password':password})
      .then(
        function(user) {
          if(user.username === username && user.password === password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function register(req,res)
  {
    var user = req.body;
    model.userModel.createUser(user).then(function(data)
    {
      req.login(user, function(err){
        res.json(user);
      });
    },function(err){
      res.json(null);
    });
  }

  function createUser(req,res)
  {
    var user = req.body;
    model.userModel.createUser(user).then(function(data)
    {
       res.json(data);
    },function(err){
       res.json(null);
    });
  }

  function findUser(req, res){
    var username = req.query['username'];
    var password = req.query['password'];
    if(password === undefined) {
      findUserByUsername(req, res);
    }else{
      findUserByCredentails(req,res);
    }
  }


  function findUserByUsername(req,res){
    var username = req.query['username'];
    model.userModel.findUserByUsername(username).then(function(data)
      {
        res.json(data);
      },function(err){
        res.json(null);
      }
    );
  }

  function findUserByCredentails(req,res){
    var username = req.query['username'];
    var password = req.query['password'];
    model.userModel.findUserByCredentails({'username':username,'password':password}).then(function(data)
      {
        res.json(data);
      },function(err){
        res.json(null);
      }
    );
  }

  function findUserById(req,res)
  {
    var userId = req.params['userId'];
    model.userModel.findUserById(userId)
      .then(function (data) {
        res.json(data);
      }, function (err) {
        res.json(null);
      });
  }

  function updateUser(req,res)
  {
    var userId = req.params['userId'];
    var userDetails=req.body;
    userDetails._id=userId;
    model.userModel.updateUser(userDetails).then(function(data)
    {
       res.json(data);
    },function(err){
       res.json(null);
    });
  }

  function deleteUser(req,res) {
    var userId = req.params.uid;
    model.userModel.deleteUser(userId).then(function(data) {
      res.json({success: true});
      },function(err){
        res.json(null);
      }
    );
  }
}
