import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
//import mongoosePaginate from 'mongoose-paginate-v2'
const userSchema = new Schema({
name: {type: String,required: true},
email: {type: String,required: true},
role: {type: String,required: true},

orders:[
    {
type: mongoose.Schema.Types.ObjectId,
ref: 'Orders'
}

],

status: {
type: Boolean,
required: false,
default: true
}
});
//userSchema.plugin(mongoosePaginate)
export const userModel = model('User', userSchema);