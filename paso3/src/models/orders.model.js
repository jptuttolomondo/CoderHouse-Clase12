import mongoose from 'mongoose'
import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
number: {type:Number}, //numero aleatorio
business:    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business'
    },

user:
    {
type: mongoose.Schema.Types.ObjectId,
ref: 'User'
},


});

export const orderModel = model('Order', orderSchema);