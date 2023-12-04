// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FoodDeliveryContract {
    address public owner;
    uint256 public orderCount;

    enum OrderStatus { Placed, InTransit, Delivered }

    struct Order {
        uint256 orderId;
        address customer;
        string dishName;
        uint256 quantity;
        OrderStatus status;
    }

    mapping(uint256 => Order) public orders;

    event OrderPlaced(uint256 orderId, address indexed customer, string dishName, uint256 quantity);
    event OrderStatusUpdated(uint256 orderId, OrderStatus status);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        orderCount = 0;
    }

    function placeOrder(string memory _dishName, uint256 _quantity) external {
        orderCount++;

        Order storage newOrder = orders[orderCount];
        newOrder.orderId = orderCount;
        newOrder.customer = msg.sender;
        newOrder.dishName = _dishName;
        newOrder.quantity = _quantity;
        newOrder.status = OrderStatus.Placed;

        emit OrderPlaced(orderCount, msg.sender, _dishName, _quantity);
    }

    function updateOrderStatus(uint256 _orderId, OrderStatus _status) external onlyOwner {
        require(_orderId <= orderCount && _orderId > 0, "Invalid order ID");

        Order storage existingOrder = orders[_orderId];
        existingOrder.status = _status;

        emit OrderStatusUpdated(_orderId, _status);
    }
}
