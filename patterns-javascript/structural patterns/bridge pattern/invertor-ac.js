class InvertorAC {
  constructor() {
    this.setting = "cool";

    this.on = function() {
      console.log("Invertor AC is on");
    };

    this.off = function() {
      console.log("Invertor AC is off");
    };

    this.heatOn = function() {
      this.setting = "heat";
      console.log("Invertor AC's heating is on");
    };

    this.coldOn = function() {
      this.setting = "cool";
      console.log("Invertor AC's cooling is on");
    };

    this.setTemparature = function(temp) {
      if (this.setting === "cool") {
        console.log(`Invertor AC's cooling is set to ` + temp + " degrees");
      }
      if (this.setting === "heat") {
        console.log(`Invertor AC's heating is set to ` + temp + " degrees");
      }
    };
  }
}

module.exports = InvertorAC