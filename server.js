const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express(); 

//Uses middleware to parse incoming data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use (routes); 
//Connect to MongoDB database and start server

db.once('open', ()=> {
    app.listen(PORT, ()=>{
        console.log(`API server running on ${PORT}!`);
    });
});