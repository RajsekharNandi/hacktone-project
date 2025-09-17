# Blockchain-Based Secure Health Record Management System

This project is a Blockchain-Based Secure Health Record Management System that utilizes Node.js, Solidity, and IPFS to securely manage health records. The system allows for the storage and retrieval of health records on the blockchain while ensuring data integrity and privacy.

## Project Structure

```
blockchain-health-records
├── src
│   ├── app.js
│   ├── controllers
│   │   └── healthRecordsController.js
│   ├── routes
│   │   └── healthRecordsRoutes.js
│   ├── services
│   │   ├── blockchainService.js
│   │   └── ipfsService.js
│   └── models
│       └── healthRecord.js
├── contracts
│   └── HealthRecord.sol
├── scripts
│   └── deploy.js
├── package.json
├── README.md
└── truffle-config.js
```

## Technologies Used

- **Node.js**: For building the backend server.
- **Express**: For handling HTTP requests and routing.
- **Solidity**: For writing smart contracts on the Ethereum blockchain.
- **IPFS**: For decentralized file storage.
- **Mongoose**: For MongoDB object modeling.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd blockchain-health-records
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up MongoDB**:
   Ensure you have a MongoDB instance running and update the connection string in `src/app.js`.

4. **Deploy the smart contract**:
   ```
   truffle migrate --network goerli
   ```

5. **Start the server**:
   ```
   npm start
   ```

## Usage

- **Add a Health Record**: Send a POST request to `/api/health-records` with the patient's address and file data.
- **Get Health Records**: Send a GET request to `/api/health-records/:patientAddress` to retrieve records for a specific patient.

## Deployment

This project can be deployed on any cloud platform that supports Node.js applications. Ensure that the environment variables for MongoDB and IPFS are correctly set in the production environment.

## License

This project is licensed under the MIT License.