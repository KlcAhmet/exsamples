function ToyFactory() {
  this.createToy = function(toyChosen) {
    if (toyChosen.toyType === "duck")
      return new ToyDuck(toyChosen);
    else if (toyChosen.toyType === "car")
      return new ToyCar(toyChosen);
    else
      return new ToyDuck(toyChosen); // default return
  };
}

function ToyDuck(toyObj) {
  this.color = toyObj.color;
  this.price = toyObj.price;
}

function ToyCar(toyObj) {
  this.color = toyObj.color;
  this.price = toyObj.price;
  this.name = toyObj.name;
}

const toyFactory = new ToyFactory();
console.log(1, toyFactory); // ToyFactory { createToy: [Function (anonymous)] }

const defaultType = toyFactory.createToy({
  price: 12,
  name: "honda"
});
console.log(2, defaultType); // ToyDuck { color: undefined, price: 12 }

const car = toyFactory.createToy({
  toyType: "car",
  color: "blue",
  price: 12,
  name: "honda"
});

console.log(3, car); // ToyCar { color: 'blue', price: 12, name: 'honda' }

const duck = toyFactory.createToy({
  toyType: "duck",
  color: "yellow",
  price: 14
});

console.log(4, duck); // ToyDuck { color: 'yellow', price: 14 }