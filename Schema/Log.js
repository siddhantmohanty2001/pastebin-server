const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema({
    
  id: String,
  
  date: Date,
  ip: String,
});

const Snippet =mongoose.models.Snippet ||mongoose.model("Snippet", logSchema);
module.exports =Snippet;