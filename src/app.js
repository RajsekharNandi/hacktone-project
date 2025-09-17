const express = require('express');
const bodyParser = require('body-parser');
const healthRecordsRoutes = require('./routes/healthRecordsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/health-records', healthRecordsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});