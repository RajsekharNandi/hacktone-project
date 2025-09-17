const express = require('express');
const HealthRecordsController = require('../controllers/healthRecordsController');

const router = express.Router();
const controller = new HealthRecordsController();

function setRoutes(app) {
    router.post('/records', controller.addRecord.bind(controller));
    router.get('/records/:patientAddress', controller.getRecords.bind(controller));
    app.use('/api', router);
}

module.exports = setRoutes;