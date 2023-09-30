const express = require('express');
const { AllReviews, PostReview, SingleReview, DeleteReview, UpdateReview } = require('../controller/Controller.review');


const routerReview = express.Router()

// GET ALL
routerReview.get("/", AllReviews);

// GET SINGLE
routerReview.get("/:id", SingleReview);

// POST 
routerReview.post("/",PostReview);

// DELETE
routerReview.delete("/:id", DeleteReview);

// UPDATE
routerReview.patch("/:id", UpdateReview);

module.exports = routerReview;