const Web3 = require('web3');
const HealthRecord = artifacts.require('HealthRecord');

module.exports = async function(deployer) {
    await deployer.deploy(HealthRecord);
    const healthRecordInstance = await HealthRecord.deployed();
    console.log('HealthRecord contract deployed at address:', healthRecordInstance.address);
};