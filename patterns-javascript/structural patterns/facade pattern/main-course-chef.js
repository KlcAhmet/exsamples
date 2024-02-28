const FoodOrders = require("./food-orders");

class MainCourseChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }

  timetoMakeOrder() {
    return Math.floor(Math.random() * 50) + 10;
  }

  conveyOrder({ orderId, orderDetails }) {
    const time = this.timetoMakeOrder();
    console.log(`Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`);
  }
}

module.exports = MainCourseChef