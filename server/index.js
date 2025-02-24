const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv'); 
const UserModel = require('./models/User');

const app = express();

dotenv.config({path: './config.env'});

// middlewares
app.use(express.json())
app.use(cors({
    origin: [""], 
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

mongoose.connect(process.env.CONN_STR2)
        .then(() => console.log(`DB connected successfully`))
        .catch((err) => console.log(`Error occured: ${err}`))
.finally(() => console.log(`Connection processed`));

app.get('/', (req, res) => {
    res.json("Server running online");
})


const verifyUser = (req, res, next) => {
    console.log(req.cookies.mytoken);

    const token = req.cookies.mytoken;

    console.log(token);
    if(! token){
        return res.json("token is missing");
    } else {
        jwt.verify(token, "jwt-secret-key", (error, decoded) => {
            if(error){
                return res.json("invalid token");
            } else {
                console.log(decoded, 45678345678)
                if(decoded === "visitor") {
                    next();
                } else {
                    return res.json("invalid user");
                }
            }
        })
    }
}
        
app.get('/home', verifyUser, (req, res) => {
    console.log('running /home route');
    res.json("success-tx");
})


app.post('/signup', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10).then(hashed => {
        UserModel.create({name, email, password: hashed}).then(user => res.status(200).json({
            status: "successful!",
            message: "user has been created",
            data: {
                name, email, hashed
            }
        })).catch(error => {
            res.status(401).json({
                status: "failed!",
                message: "user not created!"
            })
        });
    }).catch(error => {
        console.log(`Error occured: ${error}`);
        //res.send(`<h2>Error occured: ${error}`)
        res.status(500).send(`Error occured: ${error}`)
    })
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (error, response) => {
                if(response){
                    const token = jwt.sign(
                        {
                            email: user.email, 
                            role: user.role
                        },
                        process.env.SECRET_KEY,
                        {
                            expiresIn: "1d"
                        }
                    )
                    res.cookie('mytoken', token
                        // , 
                        // {
                        //     httpOnly: true,
                        //     maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds,
                        //     // expire: new Date(Date.now() + 24 * 60 * 60 * 1000),
                        //     // secure: false,    //     Set to true in production (HTTPS)
                        //     // sameSite: "Lax"   // Adjust this if cross-site issues occur
                        // }
                    )
                    return res.json(
                        {
                            status: "success", 
                            role: user.role,
                        }
                    );
                } else {
                    return res.json(
                        {
                            status: "fail",
                            message: "email or password not correct"
                        }
                    );
                }
            })
        } else {
            return res.json(
                {
                    status: "fail",
                    message: "Record not found!"
                }
            );
        }
        
    }).catch(error => {
        res.send(`$Error occured: ${error}`);
    })
});

app.listen(3001, () => {
    console.log('server runs successfully!');
})
