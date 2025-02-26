const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        validate: {
            validator: function(v){
                return typeof v !== String
            },
            message: props => `${props.value} is not a string. Use only alphabets`
        },
        trim: true,
        // validate: [validator.isAlpha, "Name should only contain alphabets"],
    },
    full_name: {
        type: String,
        required: [true, "full name is required"],
        validate: {
            validator: function(v){
                return typeof v !== String
            },
            message: props => `${props.value} is not a string. Use only alphabets`
        },
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email address is required"],
        unique: true,
        validate: {
            validator: function(v){
                return typeof v !== String
            },
            message: props => `${props.value} is not a string. Use only alphabets`
        },
        trim: true,
    },
    wallet: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        validate: {
            validator: function(v){
                return typeof v !== String
            },
            message: props => `${props.value} is not a string. Use only alphabets`
        },
        trim: true,
    },
    date: {
        type: String,
        default: new Date().toISOString(),
    },
});

// document middeleware - pre and post
// UserSchema.pre("save", function(next){
//     this.subject = undefined;
//     this.message = undefined;
//     next();
// });

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;