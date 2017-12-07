/**
 * Created by hemanthshetty on 11/11/17.
 */

  var mongoose = require("mongoose");
  var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    facebook: {
      id:    String,
      token: String
    },
    websites: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "WebsiteModel"
    }],
    dateCreated: {
      type: Date,
      default: Date.now()
    }
  }, {collection: "user"});

module.exports=userSchema;
