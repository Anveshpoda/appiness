var mongoose = require('../Connections').db
var Schema = mongoose.Schema;

var ProductsSchema = Schema({  
   name : { type: String, required:true},
   categoryId : { type: String, required:true},
},{ versionKey: false , collection: "products" });

mongoose.model('products', ProductsSchema);
module.exports = mongoose.model('products');