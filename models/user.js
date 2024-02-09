import mongoose, {  Schema, mongo } from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    password :{
        type : String,
        required : true
    }
});

const User = mongoose.models?.User || mongoose.model('User' , userSchema)
export default User;