module.exports = function(app,model) {

  var multer = require('multer');
  var path="";
  if(process.env.MLAB_USERNAME_WEBDEV) {
    path='/../../dist/assets/uploads'
  }
  else
  {
    path='/../../src/assets/uploads';
  }
  var upload = multer({ dest: __dirname + path });


  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.post ("/api/upload", upload.single('uploadImage'), uploadImage);
  app.put("/api/page/:pageId/widget", sortWidgets);





  function findAllWidgetsForPage(req, res) {
    pageId = req.params['pageId'];
    model.widgetModel.findAllWidgetForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      }, function (err) {
        res.json(null);
      })
  }

  function createWidget(req, res) {
    widget = req.body;
    model.widgetModel.createWidget(widget)
      .then(function (createdWidget) {
        res.json(widget);
      }, function (err) {
        res.json(null);
      })
  }

  function findWidgetById(req, res) {
    widgetId = req.params['widgetId'];
    model.widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.json(null);
      })
  }


  function updateWidget(req, res) {
    widgetId = req.params['widgetId'];
    widget = req.body;
    model.widgetModel.updateWidget(widget)
      .then(function (status) {
        res.json({success:true});
      }, function (err) {
        res.json(null);
      })
  }

  function deleteWidget(req, res) {
    widgetId = req.params['widgetId'];
    model.widgetModel.deleteWidget(widgetId)
      .then(function (status) {
        res.json({success:true});
      }, function (err) {
        res.json(null);
      })
  }

  function sortWidgets(req, res) {
    var pageId = req.params['pageId'];
    var start = req.query['initial'];
    var end = req.query['final'];

    model.widgetModel.reorderWidget(pageId, start, end)
      .then(function (status) {
          res.json({success:true});
        }, function (err) {
          res.json({success:false});
        }
      );
  }

  function uploadImage(req,res) {
    var widgetId      = req.body.widgetId;
    var myFile        = req.file;
    var filename      = myFile.filename;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var width  = req.body.width;
    if(width==null)
    {
      width=75;
    }

    var url = 'assets/uploads/' + filename;
    var domain = 'http://localhost:4200';
    if(process.env.MLAB_USERNAME_WEBDEV) {
        url = process.env.URL_PROD+'/assets/uploads/'+ filename;
      domain =  process.env.URL_PROD;
    }
    console.log('url is'+url);
    var w  = {"widgetType":"IMAGE","pageId":pageId,
      "size":"","text":"","width":width,"url":url};


    if(widgetId === '') {
      model.widgetModel.createWidget(w)
        .then(function (w) {
          widgetId = w._id;
        });
    }
    else{
      w._id=widgetId;
      model.widgetModel.updateWidget(w)
        .then(function (w) {
        });
    }

    var callbackUrl = domain+"/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget";
    res.redirect(callbackUrl);
  }

}
