const web3 = require('../config/web3');
const FoodDeliveryContract = require('../smart-contracts/FoodDeliveryContract.json');
const UserFeedbackContract = require('../smart-contracts/UserFeedbackContract.json');

const foodDeliveryContractAddress = 'YOUR_FOOD_DELIVERY_CONTRACT_ADDRESS';
const userFeedbackContractAddress = 'YOUR_USER_FEEDBACK_CONTRACT_ADDRESS';

const foodDeliveryContract = new web3.eth.Contract(FoodDeliveryContract.abi, foodDeliveryContractAddress);
const userFeedbackContract = new web3.eth.Contract(UserFeedbackContract.abi, userFeedbackContractAddress);

class BlockchainService {
  static async placeOrder(dishName, quantity) {
    const accounts = await web3.eth.getAccounts();

    // Assuming you have a function called placeOrder in your FoodDeliveryContract
    await foodDeliveryContract.methods.placeOrder(dishName, quantity).send({
      from: accounts[0],
    });
  }

  static async submitFeedback(orderId, comment, rating) {
    const accounts = await web3.eth.getAccounts();

    // Assuming you have a function called submitFeedback in your UserFeedbackContract
    await userFeedbackContract.methods.submitFeedback(orderId, comment, rating).send({
      from: accounts[0],
    });
  }

  // Add more methods for interacting with your smart contracts as needed
}

module.exports = BlockchainService;
