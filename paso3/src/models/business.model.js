import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const businessSchema = new Schema({
name: String,


products:[],

});

export const businessModel = model('Business', businessSchema);