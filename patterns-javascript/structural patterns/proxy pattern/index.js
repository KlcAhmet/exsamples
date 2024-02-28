class GetCapital {
  getMycapital(country) {
    if (country === "Pakistan") {
      return "Islamabad";
    } else if (country === "India") {
      return "New Delhi";
    } else if (country === "Canada") {
      return "Ottawa";
    } else if (country === "Egypt") {
      return "Cairo";
    } else {
      return "";
    }
  }
}

class ProxyGetCapital {
  constructor() {
    this.capital = new GetCapital();
    this.cache = {};
  }

  getMycapital(country) {
    if (!this.cache[country]) {
      const value = this.capital.getMycapital(country);
      this.cache[country] = value;
      return `${value}--Returning From GetCaptial`;
    } else {
      return `${this.cache[country]}--Returning from Cache`;
    }

  }
}


const capital = new ProxyGetCapital();
console.log(1, capital.getMycapital("Pakistan"));
console.log(2, capital.getMycapital("India"));
console.log(3, capital.getMycapital("Canada"));
console.log(4, capital.getMycapital("Egypt"));
console.log(5, capital.getMycapital("Egypt"));
console.log(6, capital.getMycapital("Egypt"));
console.log(7, capital.getMycapital("Pakistan"));
console.log(8, capital.getMycapital("Pakistan"));
console.log(9, capital.getMycapital("Canada"));