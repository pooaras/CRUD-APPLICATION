const mongoose=require("mongoose");
const rechargeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    cardnumber:{
        type:Number,
        required:true,
    },
    month:{
        type:String,
        required:true,
    },
    password:{
        type:Number,
        required:true,
    },
 
   
})
const recharge =mongoose.model("payment",rechargeSchema);
module.exports=recharge;