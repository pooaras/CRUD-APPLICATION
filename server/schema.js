const mongoose=require("mongoose");
const rechargeSchema=new mongoose.Schema({
    phonenumber:{
        type:Number,
        required:true,
    },
    plan:{
        type:Number,
        required:true,
    },
})
const food =mongoose.model("recharge",rechargeSchema);
module.exports=recharge;