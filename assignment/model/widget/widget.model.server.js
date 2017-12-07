/**
 * Created by hemanthshetty on 11/11/17.
 */


var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');
var PageSchema = require('../page/page.schema.server');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);
var PageModel = mongoose.model('PageModel', PageSchema);


WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetForPage = findAllWidgetForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;


function createWidget(widget) {
  createdWidget = null;
  return WidgetModel.create(widget)
    .then(function (newWidget) {
      createdWidget = newWidget;
      PageModel.findPageById(widget.pageId)
        .then(function (page) {
          page.widgets.push(createdWidget);
          return page.save();
        })
    })
}


function findAllWidgetForPage(pageId) {
  return PageModel.findPageById(pageId)
    .then(function (page) {
      return page.widgets;
    });
}


function findWidgetById(widgetId) {
  return WidgetModel.findOne({_id: widgetId});
}

function updateWidget(widget) {
  return WidgetModel.updateOne({_id: widget._id}, widget)
    .then(function (status) {
      PageModel.update({_id: widget.pageId,'widgets._id' :widget._id}, {$set: { "widgets.$" : widget }})
        .then(function (status) {
          return status;
        })
    });
}

function reorderWidget(pageId, start, final) {
  return PageModel.reorderWidgetsWithinPage(pageId, start, final);
}

function deleteWidget(widgetId) {
  return WidgetModel.findWidgetById(widgetId).then(function(widget){
    var widgetPage=widget.pageId;
    WidgetModel.deleteOne({_id: widgetId})
      .then(function (status) {
        PageModel.update({_id: widgetPage}, {$pull:{'widgets': {_id:widgetId}}})
          .then(function (status) {
            return status;
          })
      });
  });
}

