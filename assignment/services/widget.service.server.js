module.exports = function(app,model) {

  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

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
}
