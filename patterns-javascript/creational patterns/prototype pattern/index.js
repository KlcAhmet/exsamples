const car = {
  drive() {
    console.log("Started Driving");
  },
  brake() {
    console.log("Stopping the car");
  },
  numofWheels: 4
};

const car1 = Object.create(car);
car1.drive();
car1.brake();
console.log(1, car1.numofWheels);

const car2 = Object.create(car);
car2.drive();
car2.brake();
console.log(2, car2.numofWheels);

//defining the extra property color with value red
const car3 = Object.create(car, { color: { value: "red" } });
console.log(3, car3.color);

//defining the extra property color with value red black
const car4 = Object.create(car, { color: { value: "red black" } });
console.log(4, car4.color);