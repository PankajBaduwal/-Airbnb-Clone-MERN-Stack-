const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapSync=require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/users.js");
const user = require("../models/user.js");

router.route("/signup")
    .get(userController.renderSignupForm) // Render the signup form
    .post(wrapSync(userController.signup));// Handle signup form submission

router.route("/login")
    .get(userController.renderLoginForm) // Render the login form
    .post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),userController.login);// Handle login form submission


router.get("/logout",userController.logout);

module.exports=router;