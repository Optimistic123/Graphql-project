import mongoose from "mongoose";

const eventShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

// mongoose.model("Event", eventShema);
const Event = mongoose.model("Event",eventShema);
export default Event;