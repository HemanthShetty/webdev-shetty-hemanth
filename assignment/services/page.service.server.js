module.exports = function(app) {
  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '541', 'name': 'Post 4', 'websiteId': '890', 'description': 'Page about Go Pro' },
    { '_id': '549', 'name': 'Post 5', 'websiteId': '890', 'description': 'Page about SnapChat' }
  ];


  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  function createPage(req, res) {
    var page = req.body;
    var randomNumber = String(Math.floor(Math.random() * 100));
    page._id = new Date().getMilliseconds().toString() + randomNumber;
    page.websiteId=req.params['websiteId'];
    pages.push(page, 0);
    res.json(page);
  }

  function findAllPagesForWebsite(req, res) {
    const result = [];
    var index = 0;
    var websiteId=req.params['websiteId'];
    for (var x = 0 ; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        result[index] = this.pages[x];
        index++;
      }
    }
    res.json(result);
  }

  function findPageById(req,res)
  {
    var pageId=req.params['pageId'];
    for (var x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId)
      {
        res.json(this.pages[x]);
        return;
      }
    }
    res.status(404);
    res.json({});
  }


  function updatePage(req,res){
    var pageId=req.params['pageId'];
    var page=req.body;
    for (var x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x].name = page.name;
        this.pages[x].description = page.description;
        res.json({success:true});
        return;
      }
    }
    res.status(400);
  }

  function deletePage(req,res){
    var pageId=req.params['pageId'];
    for (var x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x , 1 );
      }
    }
    res.json({success:true});
  }

}
