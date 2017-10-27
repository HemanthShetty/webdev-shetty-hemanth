module.exports = function(app) {

  widgets = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'https://i.pinimg.com/originals/a2/2a/0a/a22a0a7e624943303b23cc326598c167.jpg'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/vlDzYIIOYmM'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  function findAllWidgetsForPage(req, res) {
    pageId = req.params['pageId'];
    pageWidgets = [];
    for (var i = 0  ; i < widgets.length ; i++ ) {
      if (widgets[i].pageId === pageId) {
        pageWidgets.push(widgets[i]);
      }
    }
    res.json(pageWidgets);
  }

  function createWidget(req, res) {
    widget = req.body;
    var randomNumber = String(Math.floor(Math.random() * 100));
    widget._id =  new Date().getMilliseconds().toString() + randomNumber;
    widgets.push(widget);
    res.json(widget);
  }

  function findWidgetById(req, res) {
    widgetId = req.params['widgetId'];
    for (var i=0 ; i < widgets.length ; i++ ) {
      if (widgets[i]._id === widgetId) {
        res.json(widgets[i]);
        return;
      }
    }
    return res.json(null);
  }


  function updateWidget(req, res) {
    widgetId = req.params['widgetId'];
    widget = req.body;
    for (var i ; i < widgets.length ; i++ ) {
      if (widgets[i]._id === widgetId) {
        widgets[i] = widget;
        res.json({success:true});
        return;
      }
    }
    res.json(null);
  }

  function deleteWidget(req, res) {
    widgetId = req.params['widgetId'];
    for(var w in widgets) {
      if (widgets[w]._id === widgetId) {
        widgets.splice(w, 1);
        res.json({success:true})
        return;
      }
    }
    res.json(null);
  }





}
