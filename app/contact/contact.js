import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String, 
    number: Number, 
    email: String,
}, {
    timestamps: true,
    collection: 'contact'
});

export default mongoose.model('Contacts', ContactSchema);