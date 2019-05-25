import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const Student = mongoose.model("Student", StudentSchema);
export default Student;