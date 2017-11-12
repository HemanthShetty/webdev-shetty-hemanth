/**
 * Created by hemanthshetty on 11/11/17.
 */

var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPage(page) {
  return PageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({websiteId:websiteId});
}

function findPageById(pageId) {
  return PageModel.findOne({_id:pageId});
}

function updatePage(page) {
  return PageModel.updateOne({_id:page._id}, page);
}

function deletePage(pageId) {
  return PageModel.deleteOne({_id:pageId});
}
