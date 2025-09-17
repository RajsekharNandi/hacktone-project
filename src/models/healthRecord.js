const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
    patientAddress: {
        type: String,
        required: true,
    },
    ipfsHash: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);