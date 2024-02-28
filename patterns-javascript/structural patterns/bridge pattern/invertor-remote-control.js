class InvertorRemoteControl {
  constructor(ac) {
    this.ac = ac;


    this.heat = function() {
      this.ac.heatOn();
    };

    this.cold = function() {
      this.ac.coldOn();
    };

    this.on = function() {
      this.ac.on();
    };

    this.off = function() {
      this.ac.off();
    };

    this.setTemparature = function(temp) {
      this.ac.setTemparature(temp);
    };
  }
}

module.exports = InvertorRemoteControl