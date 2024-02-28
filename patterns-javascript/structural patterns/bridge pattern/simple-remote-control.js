class SimpleRemoteControl {
  constructor(ac) {
    this.ac = ac;

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

module.exports = SimpleRemoteControl