const {listingSchema} = require("../schema.js");
const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const ListingController=require("../controllers/listing.js");
const multer = require("multer");
const { cloudinary, storage } = require('../cloudConfig.js');
const upload = multer({ storage});


router.route("/")
.get(wrapAsync(ListingController.index))  //Index Route
.post(
  isLoggedIn,
  upload.single('listing[image]'),
    validateListing,
   wrapAsync(ListingController.createListing) //Create route
);

 //New Route
  router.get("/new",isLoggedIn,ListingController.RenderNewForm);

router.route("/:id")
.get(wrapAsync(ListingController.showListing))  //Show Route
.put(isLoggedIn,
    isOwner,
      upload.single('listing[image]'),
    validateListing,
    wrapAsync(ListingController.updateListing))  //update route
.delete(isLoggedIn,isOwner,
    wrapAsync(ListingController.deleteListing));  //DELETE ROUTE

 
  
  //Edit route
  router.get("/:id/edit",isLoggedIn,isOwner,
    wrapAsync(ListingController.renderEditForm));
  

module.exports=router;