const FoodOrders = require("./food-orders");

class DessertChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }

  timetoMakeOrder() {
    return Math.floor(Math.random() * 30) + 10;
  }

  conveyOrder({ orderId, orderDetails }) {
    const time = this.timetoMakeOrder();
    console.log(`Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`);
  }
}

module.exports = DessertChef;