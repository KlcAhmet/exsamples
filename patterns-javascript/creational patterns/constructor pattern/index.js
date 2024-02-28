function Human(name, age, occupation) {
  //ES5 function based constructor
  //defining properties inside the constructor function
  //constructor initializing the property values upon object creation
  this.name = name;
  this.age = age;
  this.occupation = occupation;

  //defining a method inside the constructor function
  this.describe = function() {
    console.log(`${this.name} is a ${this.age} year old ${this.occupation}`);
  };
}


const person = new Human("Elle", "23", "Engineer");
person.describe();

const newperson = new Human("Joe", "13", "Painter");
newperson.describe();