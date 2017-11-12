/**
 * Created by hemanthshetty on 11/11/17.
 */


var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server')

var PageSchema = mongoose.Schema({
  websiteId: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  name: String,
  title: String,
  description: String,
  widgets: [widgetSchema],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'page'});

module.exports = PageSchema;
