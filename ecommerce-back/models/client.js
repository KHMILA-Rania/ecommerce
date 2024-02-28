const  mongoose=require('mongoose');

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

module.exports=mongoose.model('client', clientSchema);