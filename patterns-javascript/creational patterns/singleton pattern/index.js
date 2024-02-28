let instance = null;

class Printer {
  constructor(pages) {
    this.display = function() {
      console.log(`You are connected to the printer. You want to print ${pages} pages.`);
    };
  }

  static getInstance(numOfpages) {
    if (!instance) { // if instance === null, Printer object create or return existing object
      instance = new Printer(numOfpages);
    }
    return instance;
  }
}

const obj1 = Printer.getInstance(2);
console.log(obj1); // Printer { display: [Function (anonymous)] }
obj1.display(); // You are connected to the printer. You want to print 2 pages.

const obj2 = Printer.getInstance(3);
console.log(obj2); // Printer { display: [Function (anonymous)] }
obj2.display(); // You are connected to the printer. You want to print 2 pages.

console.log(obj2 === obj1); // true