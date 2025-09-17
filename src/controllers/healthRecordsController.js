class HealthRecordsController {
    constructor(blockchainService, ipfsService) {
        this.blockchainService = blockchainService;
        this.ipfsService = ipfsService;
    }

    async addRecord(req, res) {
        try {
            const { patientAddress, file } = req.body;
            const ipfsHash = await this.ipfsService.uploadFile(file);
            await this.blockchainService.addRecord(patientAddress, ipfsHash);
            res.status(201).json({ message: 'Health record added successfully', ipfsHash });
        } catch (error) {
            res.status(500).json({ message: 'Error adding health record', error: error.message });
        }
    }

    async getRecords(req, res) {
        try {
            const { patientAddress } = req.params;
            const records = await this.blockchainService.getRecords(patientAddress);
            res.status(200).json(records);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving health records', error: error.message });
        }
    }
}

module.exports = HealthRecordsController;