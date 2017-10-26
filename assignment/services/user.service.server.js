module.exports = function(app) {
  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  , email:"alice@gmail.com"},
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  , email:"bob@gmail.com" },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"   , email:"charly@gmail.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi"  , email:"jannunzi@gmail.com"}
  ];

  app.post('/api/user', createUser);
  app.get('/api/user', findUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);


  function createUser(req,res)
  {
    var user = req.body;
    var randomNumber=String(Math.floor(Math.random()*100));
    user._id = new Date().getMilliseconds().toString()+randomNumber;
    users.push(user,0);
    res.send(user);
    return;
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
    for(var i=0;i<=users.length;i++)
    {
      if(users[i].username===username)
      {
        res.json(users[i]);
        return;
      }
    }
    res.json(null);
  }

  function findUserByCredentails(req,res){
    var username = req.query['username'];
    var password = req.query['password'];
    for(var i=0;i<=users.length;i++)
    {
      if(users[i].username===username && users[i].password===password)
      {
        res.json(users[i]);
        return;
      }
    }
    res.json(null);
  }

  function findUserById(req,res)
  {
    var userId = req.params['userId'];
    for(var i=0;i<=users.length;i++)
    {
      if(users[i]._id===userId)
      {
        res.json(users[i]);
        return;
      }
    }
    res.json(null);
  }

  function updateUser(req,res)
  {
    var userId = req.params['userId'];
    var userDetails=req.body;
    for(var i=0;i<=users.length;i++)
    {
      if(users[i]._id===userId)
      {
        users[i].username=userDetails.username;
        users[i].password=userDetails.username;
        users[i].firstName=userDetails.firstName;
        users[i].lastName=userDetails.lastName;
        users[i].email=userDetails.email;
        res.json({success:true});
        return;
      }
    }
    res.json(null);
  }

  function deleteUser(req,res)
  {
    var userId = req.params.uid;
    for (var i=0 ; i < users.length ; i++ ) {
      if (users[i]._id === userId) {
        users.splice(i, 1);
      }
    }
    res.json({success:true});
  }
}
