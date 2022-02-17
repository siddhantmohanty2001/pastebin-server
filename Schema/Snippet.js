const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const snippetSchema = new Schema({
    
  snippet: String,
  slug: String,
  date: Date,
  expiryDate: Date,
  link: String,
});

const Snippet =mongoose.models.Snippet ||mongoose.model("Snippet", snippetSchema);
module.exports =Snippet;