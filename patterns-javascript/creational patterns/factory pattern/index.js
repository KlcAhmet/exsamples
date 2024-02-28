const Chocolate = require("./Chocolate");
const Mint = require("./Mint");
const Strawberry = require("./Strawberry");

class IceCreamFactory {
  constructor() {
    this.createIcecream = function(selection) {
      if (selection === "chocolate")
        return new Chocolate();
      else if (selection === "mint")
        return new Mint();
      else if (selection === "strawberry")
        return new Strawberry();

      return "No more selection";
    };
  }
}

// creating objects
const iceCreamfactory = new IceCreamFactory();
console.log(1, iceCreamfactory); // IceCreamFactory { createIcecream: [Function (anonymous)] }

const chocolate = iceCreamfactory.createIcecream("chocolate");
const mint = iceCreamfactory.createIcecream("mint");
const strawberry = iceCreamfactory.createIcecream("strawberry");

console.log(2, chocolate.message()); // You chose the chocolate flavor.
console.log(3, mint.message()); // You chose the mint flavor.
console.log(4, strawberry.message()); // You chose the strawberry flavor.