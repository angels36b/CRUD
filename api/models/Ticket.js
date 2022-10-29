import mongoose, { mongo } from "mongoose";

const ticketSchema = new mongoose.Schema({
    subtotal:Number,
    total:Number,
    tax: Number,
    items:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Item',
        },
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
})

export default mongoose.model('Ticket', ticketSchema)