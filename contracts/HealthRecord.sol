pragma solidity ^0.8.0;

contract HealthRecordSystem {
    struct Record {
        string ipfsHash;
        address patientAddress;
    }

    mapping(address => Record[]) private records;

    event RecordAdded(address indexed patient, string ipfsHash);

    function addRecord(string memory _ipfsHash) public {
        records[msg.sender].push(Record(_ipfsHash, msg.sender));
        emit RecordAdded(msg.sender, _ipfsHash);
    }

    function getRecords() public view returns (Record[] memory) {
        return records[msg.sender];
    }
}