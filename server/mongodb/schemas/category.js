var mongoose = require('../Connections').db
var Schema = mongoose.Schema;

var CategorySchema = Schema({  
   name : { type: String, required:true},
},{ versionKey: false , collection: "category" });

mongoose.model('category', CategorySchema);
module.exports = mongoose.model('category');