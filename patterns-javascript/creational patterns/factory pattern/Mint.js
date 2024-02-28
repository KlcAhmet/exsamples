module.exports = class Mint {
  constructor() {
    this.icecreamFlavor = "mint";
    this.message = function() {
      return `You chose the ${this.icecreamFlavor} flavor.`;
    };
  }
};