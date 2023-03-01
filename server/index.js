const express =require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const app=express();

const schema1=require("./schema/schema1");
const schema2=require("./schema/schema2");
const schema3=require("./schema/schema3");
const schema4=require("./schema/schema4")
//const schema4=require("./schema/schema4");


app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://siva:siva70@crud.jx1dku6.mongodb.net/recharge?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
});

app.post("/insert",async(req,res)=>{
    const mobilenum=req.body.mobilenum;
    const amount=req.body.amount;
    var type=req.body.type;
    var operator=req.body.operator;
    var circle=req.body.circle;

    // signup



    const detail=new schema1({type:type,phonenumber:mobilenum,operator:operator,circle:circle,plan:amount})
    
    
    //const payment=new schema4({type:type,phonenumber:mobilenum,operator:operator,circle:circle,plan:amount})
    try{
        await detail.save();
        res.send("inseted data...")
    }
    catch(err){
        console.log(err)
    }
});

app.post("/sign",async(req,res)=>{
    var mailid=req.body.mailid;
    var password=req.body.password;

    const signup=new schema2({ mailid:mailid,password:password})
    try{
        await signup.save();
        res.send("inseted data...")
    }
    catch(err){
        console.log(err)
    }
});
app.post("/login",async(req,res)=>{
    var mailid=req.body.mailid;
    var password=req.body.password;

    const login=new schema3({ mailid:mailid,password:password})
    try{
        await login.save();
        res.send("inseted data...")
    }
    catch(err){
        console.log(err)
    }
});
app.post("/pay",async(req,res)=>{
    var name=req.body.name;
    var cardnumber=req.body.cardnumber;
    var month=req.body.month;
    var password=req.body.password;

    const payment=new schema4({name:name,cardnumber:cardnumber,month:month,password:password})
    try{
        await payment.save();
        res.send("inseted data...")
    }
    catch(err){
        console.log(err)
    }
});

app.listen(3001,()=>{
    console.log("server running on port 3001");
})