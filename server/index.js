const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const UserModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser()); 

mongoose.connect(process.env.MONGO_URL);
//mongoose.connect('mongodb://localhost:27017/walletpi');

app.post('/verify', (req, res) => {
    const  data  = req.body;
    console.log(data + " uidw");

    UserModel.create(data)
    .then(user => res.status(200).json({
        success: true,
        message: `${user} User info saved successfully`,
    }))
    .catch(error => res.status(400).json({ 
        success: false, 
        message: `Error occurred ${error}`
    }));
});

app.listen(3001, () => {
    console.log("Server is running");
})

