const mongoose=require("mongoose");
const { use } = require("passport");
const Schema=mongoose.Schema;
const passportLocalMongooose=require("passport-local-mongoose");

 
const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
});

userSchema.plugin(passportLocalMongooose);

module.exports = mongoose.model("User", userSchema);