const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema({
    
  slug: String,
  date: Date,
  ip: String,
});

const Log =mongoose.models.Log ||mongoose.model("Log", logSchema);
module.exports =Log;