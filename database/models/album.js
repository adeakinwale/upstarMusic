// Todo: create Album Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});

// const Album = mongoose.model("album", AlbumSchema);
// It's a sub document, Only a schema instead of a model
module.exports = AlbumSchema;
