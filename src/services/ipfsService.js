class IPFSService {
    constructor() {
        const IPFS = require('ipfs-core');
        this.ipfs = IPFS.create();
    }

    async uploadFile(file) {
        const { path } = await this.ipfs.add(file);
        return path;
    }

    async getFile(hash) {
        const chunks = [];
        for await (const chunk of this.ipfs.cat(hash)) {
            chunks.push(chunk);
        }
        return Buffer.concat(chunks);
    }
}

module.exports = IPFSService;