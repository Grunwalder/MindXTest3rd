import mongoose from 'mongoose';
import CombineCollection from '../database/index.js';

const useSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
    },
    role: {
        type: String,
        default: 'USER'
    }
});

const UserModel = mongoose.model(CombineCollection['USER'], useSchema);
export default UserModel;