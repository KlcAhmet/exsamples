function Meal() {
  this.make = function(builder) {
    console.log("start builder.step1()");
    builder.step1();

    console.log("start builder.step2()");
    builder.step2();

    console.log("start builder.step3()");
    builder.step3();

    console.log("start builder.step4()");
    builder.step4();

    console.log("builder return object");
    return builder.get();
  };
}

function MealBuilder(pattie, side, soda) {
  this.meal = null;
  this.step1 = function() {
    console.log("MealBuilder create new Order object");
    this.meal = new Order();
  };

  this.step2 = function() {
    console.log("MealBuilder add burger in menu");
    this.meal.addBurger(pattie);
  };

  this.step3 = function() {
    console.log("MealBuilder add side in menu");
    this.meal.addSide(side);
  };

  this.step4 = function() {
    console.log("MealBuilder add soda in menu");
    this.meal.addSoda(soda);
  };

  this.get = function() {
    console.log("MealBuilder return created menu");
    return this.meal;
  };
}

function Order() {
  this.burger = null;
  this.side = null;
  this.soda = null;

  this.addBurger = function(pattie) {
    console.log("Order add burger in menu");
    this.burger = pattie;
  };

  this.addSide = function(side) {
    console.log("Order add side in menu");
    this.side = side;
  };

  this.addSoda = function(soda) {
    console.log("Order add soda in menu");
    this.soda = soda;
  };

  this.display = function() {
    console.log(`You meal has a ${this.burger} burger, ${this.side} on the side, and a ${this.soda}.`);
  };
}

const meal = new Meal();
console.log(meal);

const mealBuilder = new MealBuilder("chicken", "curly fries", "coke");

const chickenBurgerMeal = meal.make(mealBuilder);
chickenBurgerMeal.display();