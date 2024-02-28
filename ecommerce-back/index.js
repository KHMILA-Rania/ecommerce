const express=require('express');
app= express();
const PORT=3000;

const mongoose = require('mongoose');

const mongo='mongodb+srv://rania:rania@work.errgaiy.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=work'
mongoose.connect(mongo);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });