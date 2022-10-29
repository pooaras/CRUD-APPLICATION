const mongoose=require("mongoose");
const rechargeSchema=new mongoose.Schema({
    type:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,
    },
    operator:{
        type:String,
        required:true,
    },
    circle:{
        type:String,
        required:true,
    },
    plan:{
        type:Number,
        required:true,
    },
   
})
const recharge =mongoose.model("recharge",rechargeSchema);
module.exports=recharge;