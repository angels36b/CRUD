import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    lastname:String,
    birthday: Date,
    address: String,
    role: String,
    phone: String,
    contacts: [String], //array de string
    email: String,
    password: String,
})

export default mongoose.model('User', userSchema )