const Web3 = require('web3');

// Replace 'your_provider_url' with the URL of your Ethereum provider
const providerUrl = 'your_provider_url';

// Create a web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

module.exports = web3;
