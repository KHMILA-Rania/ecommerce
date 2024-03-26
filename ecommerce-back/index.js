require('dotenv').config();
const express=require('express');
const app= express();
const PORT=3000;
app.use(express.json())
const mongoose = require('mongoose');


const mongo=process.env.db

mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
});

//client routes
const clientroutes= require('./routes/clientRoutes')
app.use('/client',clientroutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });