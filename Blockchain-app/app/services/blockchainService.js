angular.module("blockchainApp").factory("BlockchainService", function () {
  var blockchain = [];

  function calculateHash(index, previousHash, timestamp, transactions, nonce) {
    return CryptoJS.SHA256(
      index + previousHash + timestamp + JSON.stringify(transactions) + nonce
    ).toString();
  }

  function createGenesisBlock() {
    var index = 0;
    var previousHash = "None";
    var timestamp = new Date().toISOString();
    var transactions = [
      "Genesis Block: Created to demonstrate the fundamentals of blockchain. No previous hash. Timestamp marks the start of the chain.",
      "A new chain begins.",
      "Exploring the power of decentralized trust.",
      "This website is developed solely for educational purposes to help users understand the basic concepts of blockchain technology.",
    ];
    var nonce = 0;
    var hash = calculateHash(
      index,
      previousHash,
      timestamp,
      transactions,
      nonce
    );
    return {
      index: index,
      previousHash: previousHash,
      timestamp: timestamp,
      transactions: transactions,
      nonce: nonce,
      hash: hash,
    };
  }

  function getLatestBlock() {
    return blockchain[blockchain.length - 1];
  }

  function addBlock(newBlock) {
    blockchain.push(newBlock);
  }

  function mineBlock(transactions) {
    var previousBlock = getLatestBlock();
    var index = previousBlock.index + 1;
    var previousHash = previousBlock.hash;
    var timestamp = new Date().toISOString();
    var nonce = 0;
    var hash = calculateHash(
      index,
      previousHash,
      timestamp,
      transactions,
      nonce
    );
    // Simple Proof of Work
    while (hash.substring(0, 4) !== "0000") {
      nonce++;
      hash = calculateHash(index, previousHash, timestamp, transactions, nonce);
    }
    return {
      index: index,
      previousHash: previousHash,
      timestamp: timestamp,
      transactions: transactions,
      nonce: nonce,
      hash: hash,
    };
  }

  // Initialize blockchain with genesis block
  blockchain.push(createGenesisBlock());

  return {
    getBlockchain: function () {
      return blockchain;
    },
    addBlock: addBlock,
    mineBlock: mineBlock,
  };
});
