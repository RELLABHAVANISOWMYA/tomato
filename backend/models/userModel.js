// import mongoose from "mongoose"

// const userSchema =new mongoose.Schema({
//     name:{}
// })
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Add additional fields as needed
});

const User = mongoose.model('User', userSchema);
export default User;
