const express = require ('express');
const connectDB = require('./config/db');

const app = express();

//connect Data base
connectDB();

app.get('/',(req,res) => res.send('API RUNNING'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));