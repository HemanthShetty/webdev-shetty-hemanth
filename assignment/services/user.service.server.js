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

  





}
