const client =require('../models/client');
const mongoose=require('mongoose')

//Register
const createClient=async (req,res)=>{
    try {

        const {name,password,adress,phone,email}=req.body;

        const user=new client({
            name,
            password,
            phone,
            adress,
            email
        });
        const savedUser=await user.save();
}
catch(err){
    res.status(500).json({ message:err.message})
}
}


module.exports={createClient}