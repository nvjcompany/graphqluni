import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const University = mongoose.model("University", UniversitySchema);
export default University;

