// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserFeedbackContract {
    address public owner;
    uint256 public feedbackCount;

    struct Feedback {
        uint256 feedbackId;
        address user;
        uint256 orderId;
        string comment;
        uint8 rating; // Assume a rating out of 10
    }

    mapping(uint256 => Feedback) public feedbacks;

    event FeedbackSubmitted(uint256 feedbackId, address indexed user, uint256 orderId, string comment, uint8 rating);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        feedbackCount = 0;
    }

    function submitFeedback(uint256 _orderId, string memory _comment, uint8 _rating) external {
        require(_orderId > 0, "Invalid order ID");
        require(_rating <= 10, "Invalid rating");

        feedbackCount++;

        Feedback storage newFeedback = feedbacks[feedbackCount];
        newFeedback.feedbackId = feedbackCount;
        newFeedback.user = msg.sender;
        newFeedback.orderId = _orderId;
        newFeedback.comment = _comment;
        newFeedback.rating = _rating;

        emit FeedbackSubmitted(feedbackCount, msg.sender, _orderId, _comment, _rating);
    }
}

