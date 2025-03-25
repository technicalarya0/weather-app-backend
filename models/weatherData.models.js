import mongoose from "mongoose";

const weatherDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    searchDate: {
        type: Date,
        default: Date.now,
    },
    data: {
        type: Object,
    }
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

export default WeatherData;