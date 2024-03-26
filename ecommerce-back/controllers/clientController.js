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


//get clients
const getAllClients = async (req, res) => {
    try {
        const allusersData = await client.find();
        res.json(allusersData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get user by id 
const getClientById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    try {
        const foundUser = await client.findById(id);
        if (!foundUser) {
            return res.status(404).json({ message: 'client not found' });
        }
        res.json(foundUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//update user
const updateClient = async (req, res) => {
    try {
        const updatedUser = await client.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//delete client
const deleteClient = async (req, res) => {
    try {
        const deletedUser = await client.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'client not found' });
        }
        res.json({ message: 'client deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports={createClient,
    getClientById,
    updateClient,
    deleteClient,
    getAllClients
}