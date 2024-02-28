class FrozenYoghurt {
  constructor(flavor, price) {
    this.flavor = flavor;
    this.price = price;
  }

  orderPlaced() {
    console.log(`The ${this.flavor} flavor will cost you ${this.price} dollars`);
  }
}

// decorator 1
function addFlavors(froyo) {
  froyo.addStrawberry = true;
  froyo.addVanilla = true;
  froyo.price += 20;
  froyo.updatedInfo = function() {
    console.log(`The updated price after adding flavors is ${froyo.price} dollars`);
  };
  return froyo;
}

// decorator 2
function addToppings(froyo) {
  froyo.hasSprinkles = true;
  froyo.hasBrownie = true;
  froyo.hasWafers = true;
  froyo.allToppings = function() {
    console.log("Your froyo has sprinkles, brownie, and wafers");
  };
  return froyo;
}

//using decorators
//creating a froyo
const froyo = new FrozenYoghurt("chocolate", 10);
console.log(1, froyo); // FrozenYoghurt { flavor: 'chocolate', price: 10 }
froyo.orderPlaced();
//adding flavors
const froyowithFlavors = addFlavors(froyo);
/*
FrozenYoghurt {
  flavor: 'chocolate',
  price: 30,
  addStrawberry: true,
  addVanilla: true,
  updatedInfo: [Function (anonymous)]
}
*/
console.log(2, froyowithFlavors);
froyowithFlavors.updatedInfo();
//adding toppings
const froyoWithToppings = addToppings(froyo);
/*
FrozenYoghurt {
  flavor: 'chocolate',
  price: 30,
  addStrawberry: true,
  addVanilla: true,
  updatedInfo: [Function (anonymous)],
  hasSprinkles: true,
  hasBrownie: true,
  hasWafers: true,
  allToppings: [Function (anonymous)]
}
*/
console.log(3, froyoWithToppings);
froyoWithToppings.allToppings();