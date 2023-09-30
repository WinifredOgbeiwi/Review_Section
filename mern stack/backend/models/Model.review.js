const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SchemaReview = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const ModelReview = mongoose.model("ModelReview", SchemaReview);

module.exports = ModelReview;
