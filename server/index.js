const express =require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const app=express();

const schema1=require("./schema/schema1");

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://pooaraz:htrae7OtlKULs7K7@crud.kxyyig9.mongodb.net/recharge?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
});

app.post("/insert",async(req,res)=>{
    const mobilenum=req.body.mobilenum;
    const amount=req.body.amount;
    var type=req.body.type;
    var operator=req.body.operator;
    var circle=req.body.circle;

    const detail=new schema1({type:type,phonenumber:mobilenum,operator:operator,circle:circle,plan:amount})
    try{
        await detail.save();
        res.send("inseted data...")
    }
    catch(err){
        console.log(err)
    }
});

app.listen(3001,()=>{
    console.log("server running on port 3001");
})