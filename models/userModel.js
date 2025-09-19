const mongoose = require("mongoose")

//Define the user schema.
const signupSchema = new mongoose.Schema({
  name:{
    type:String,
     required:true
   },  
  
  email:{
       type:String,
      required:true,
      unique: true 
    },
    password:{
      type:String,
      required:true
    },
    role:{
       type:String,
       enum:["user","admin"],
       default:"user"
       },

       status:{
        type:String,
        enum:["pending","Assign"],
        default:"pending"
        },
        assign:{
          type:String,
          default:"Not assigned"
          },
},
{timestamps:true}
)


const User = mongoose.model("users",signupSchema)

 module.exports= User;
