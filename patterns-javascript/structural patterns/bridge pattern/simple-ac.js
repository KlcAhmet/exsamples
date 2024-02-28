class SimpleAC {
  constructor() {
    this.on = function() {
      console.log("Simple AC is on");
    };

    this.off = function() {
      console.log("Simple AC is off");
    };

    this.setTemparature = function(temp) {
      console.log(`Simple AC's cooling is set to ` + temp + " degrees");
    };
  }
}

module.exports = SimpleAC