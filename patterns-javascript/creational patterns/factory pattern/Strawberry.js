module.exports = class Strawberry {
  constructor() {
    this.icecreamFlavor = "strawberry";
    this.message = function() {
      return `You chose the ${this.icecreamFlavor} flavor.`;
    };
  }
};