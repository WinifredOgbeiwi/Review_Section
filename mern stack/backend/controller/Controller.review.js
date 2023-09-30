const { default: mongoose } = require("mongoose");
const ModelReview = require("../models/Model.review");

const AllReviews = async (req, res) => {
  const allReviews = await ModelReview.find({}).sort({ createdAt: -1 });
  res.status(200).json(allReviews);
};

const PostReview = async (req, res) => {
  const { name, title, body, rating, img } = req.body;
  try {
    const postReview = await ModelReview.create({
      name,
      title,
      body,
      rating,
      img:img || null
    });
    res.status(200).json(postReview);
  } catch (error) {
    res.status(400).json( error);
  }
};

const SingleReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "NOT A VALID ID" });
  }

  const singleReview = await ModelReview.findById(id);
  if (!singleReview) {
    return res.status(404).json({ error: " ID NOT FOUND" });
  }
  res.status(200).json(singleReview);
};

const DeleteReview = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error: "NOT A VALID ID" });
    }
    const deleteReview = await ModelReview.findOneAndDelete(id)
    if(!deleteReview){
        return res.status(404).json({ error: " ID NOT FOUND" });
    }
    res.status(200).json(deleteReview)
}

const UpdateReview = async (req, res) =>{
const {id} = req.params;
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ error: "NOT A VALID ID" });
}
const updateReview = await ModelReview.findOneAndUpdate(id)
if(!updateReview){
  return res.status(404).json({ error: " ID NOT FOUND" });
}
res.status(200).json(updateReview)
}

module.exports = {
  AllReviews,
  PostReview,
  SingleReview,
  DeleteReview,
  UpdateReview,
};
