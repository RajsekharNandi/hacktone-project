class BlockchainService {
    constructor(web3, contract) {
        this.web3 = web3;
        this.contract = contract;
    }

    async addRecord(patientAddress, ipfsHash) {
        try {
            const accounts = await this.web3.eth.getAccounts();
            await this.contract.methods.addRecord(patientAddress, ipfsHash).send({ from: accounts[0] });
        } catch (error) {
            throw new Error('Error adding record to blockchain: ' + error.message);
        }
    }

    async getRecords(patientAddress) {
        try {
            const records = await this.contract.methods.getRecords(patientAddress).call();
            return records;
        } catch (error) {
            throw new Error('Error retrieving records from blockchain: ' + error.message);
        }
    }
}

module.exports = BlockchainService;