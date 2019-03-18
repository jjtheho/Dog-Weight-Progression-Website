const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogInfoSchema = new Schema({
    name: String,
    age: Number,
    weight: Number
});

const DogInfo = mongoose.model('doginfo', DogInfoSchema);

module.exports = DogInfo;
