const  mongoose=require('mongoose');
const bcrypt = require('bcryptjs')
const clientSchema=new mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    adress: {
        required: true,
        type: String
    },

    email: {
        required: true,
        type: String
    },

    phone: {
        required: true,
        type: String
    },

    password: {
        required: true,
        type: String
    }




})

clientSchema.pre('save', async function(next){
    const client =this;
    if(client.isModified('password')){
        client.password= await bcrypt.hash(client.password,10)
    }
    next();
})

module.exports=mongoose.model('client', clientSchema);