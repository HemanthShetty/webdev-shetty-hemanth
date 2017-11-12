/**
 * Created by hemanthshetty on 11/11/17.
 */


var userModel = require('./user/user.model.server');
var websiteModel = require('./website/website.model.server');
var pageModel = require('./page/page.model.server');
var widgetModel = require('./widget/widget.model.server');


var model = {
  userModel: userModel,
  websiteModel: websiteModel,
  pageModel: pageModel,
  widgetModel: widgetModel
};


module.exports = model;
