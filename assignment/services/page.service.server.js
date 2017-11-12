module.exports = function(app,model) {

  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);


  function createPage(req, res) {
    var page = req.body;
    page.websiteId=req.params['websiteId'];
    model.pageModel.createPage(page).then(function(data)
    {
      res.json(data);
    },function(err){
      res.json(null);
    });
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId=req.params['websiteId'];
    model.pageModel.findAllPagesForWebsite(websiteId).then(function(data)
    {
      if(data)
      {
        res.json(data);
      }
      else
      {
        res.json([{}]);
      }
    },function(err){
      res.json(err);
    });
  }

  function findPageById(req,res)
  {
    var pageId=req.params['pageId'];
    model.pageModel.findPageById(pageId).then(
      function(data){
        if(data==null)
        {
          res.status(404);
          res.json({});
        }
        else
        {
          res.json(data);
        }
      },function(err){
        res.status(500);
        res.json({});
      }
    );
  }


  function updatePage(req,res){
    var pageId=req.params['pageId'];
    var page=req.body;
    page._id=pageId;
    model.pageModel.updatePage(page).then(function(data)
    {
      res.json({success:true});
    },function(err)
    {
      res.status(400);
      res.json(null);
    });
  }

  function deletePage(req,res){
    var pageId=req.params['pageId'];
    model.pageModel.deletePage(pageId).then(function(data){
      res.json({success:true});
    });
  }

}
