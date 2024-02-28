const MainCourseChef = require("./main-course-chef");
const DessertChef = require("./dessert-chef");

let orderNumber = 0;

class PlaceFoodOrder {
  placeOrder(orderDetails) {
    const orderId = PlaceFoodOrder.generateId();
    let chef;
    if (orderDetails.foodType === "Main Course") {
      chef = new MainCourseChef();
    } else if (orderDetails.foodType === "Dessert") {
      chef = new DessertChef();
    }
    return chef.addFoodOrder({ orderId, orderDetails });
  }

  static generateId() {
    return ++orderNumber;
  }
}

const customer = new PlaceFoodOrder();
const order1 = customer.placeOrder({ foodType: "Main Course", foodDetails: "Pasta with Shrimps" });
const order2 = customer.placeOrder({ foodType: "Dessert", foodDetails: "Molten Lava Cake" });