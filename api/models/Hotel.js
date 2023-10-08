import mongoose from 'mongoose';

const {Schema} = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    // photos: {
    //     type: [String],
    //     required: true
    // },
    description: {
        type: String,
        required:true
    },
    rating: {
        type: String,
        required:true
    },
    rooms: {
        type: [String],
    }
});

export default mongoose.model("Hotel", HotelSchema)