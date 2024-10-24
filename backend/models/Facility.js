const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    id: Number,
    specializations: [String],
});

const FacilitySchema = new Schema({
    name: { type: String, required: true, unique: true},
    rooms: [RoomSchema],
});

module.exports = mongoose.model('Facility', FacilitySchema);