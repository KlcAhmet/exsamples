function Soda(name, type, price) {
  this.name = name;
  this.type = type;
  this.price = price;
  this.display = function() {
    console.log(`The ${this.type} ${this.name} costs ${this.price} dollars`);
  };
}

function Chips(name, type, price) {
  this.name = name;
  this.type = type;
  this.price = price;
  this.display = function() {
    console.log(`The ${this.type} ${this.name} costs ${this.price} dollars`);
  };
}

function JunkFoodFactory() {
  let junkfood;
  this.createJunkFood = function(name, type, price) {
    switch (name) {
      case "chips":
        junkfood = new Chips(name, type, price);
        break;
      case "soda":
        junkfood = new Soda(name, type, price);
        break;
      default:
        junkfood = new Chips(name, type, price);
        break;
    }
    return junkfood;
  };
}


let factory = new JunkFoodFactory();
let chips = factory.createJunkFood("chips", "potato", 1.50);
chips.display();

chips = factory.createJunkFood("chips", "corn", 2.50);
chips.display();

let soda = factory.createJunkFood("soda", "Energy Drink", 10);
soda.display();

soda = factory.createJunkFood("soda", "Cola", 7);
soda.display();