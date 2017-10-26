module.exports = function(app) {

  websites = [
    {'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem'}
  ];


  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  function createWebsite(req, res) {
    var website = req.body;
    var randomNumber = String(Math.floor(Math.random() * 100));
    website._id = new Date().getMilliseconds().toString() + randomNumber;
    website.developerId=req.params['userId'];
    websites.push(website, 0);
    res.json(website);
  }

  function findAllWebsitesForUser(req, res) {
    const result = [];
    var index = 0;
    var userId=req.params['userId'];
    for (var x = 0 ; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        result[index] = this.websites[x];
        index++;
      }
    }
    res.json(result);
  }

  function findWebsiteById(req, res) {
    var websiteId=req.params['websiteId'];
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId)
      {
        res.json(this.websites[x]);
        return;
      }
    }
    res.status(404);
    res.json({});
  }

  function updateWebsite(req,res){
    var websiteId=req.params['websiteId'];
    var website=req.body;
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x].name = website.name;
        this.websites[x].description = website.description;
        res.json({success:true});
        return;
      }
    }
    res.status(400);
    res.json(null);
  }

  function deleteWebsite(req,res){
    var websiteId=req.params['websiteId'];
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x , 1 );
      }
    }
    res.json({success:true});
  }
}
