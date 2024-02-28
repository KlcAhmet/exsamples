class FoodOrders {
  constructor() {
    this.orders = [];
  }

  addFoodOrder(order) {
    this.orders.push(order);
    return this.conveyOrder(order);
  }

  timetoMakeOrder() {
  }

  conveyOrder(order) {
  }
}

module.exports = FoodOrders;