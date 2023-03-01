const mongoose=require("mongoose");
const rechargeSchema=new mongoose.Schema({
    mailid:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
 
   
})
const recharge =mongoose.model("signup",rechargeSchema);
module.exports=recharge;