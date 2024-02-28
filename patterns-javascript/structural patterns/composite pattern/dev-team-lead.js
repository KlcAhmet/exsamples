const Employee = require("./employee");

//Composite subclass
class DevTeamLead extends Employee {
  constructor(name, position) {
    super(name, position);
    this.teamMembers = [];
  }

  addMember(employee) {
    this.teamMembers.push(employee);
  }

  removeMember(employee) {
    for (let i = 0; i < this.teamMembers.length; i++) {
      if (this.teamMembers[i] === employee) {
        this.teamMembers.splice(i, 1);
      }
    }
    return this.teamMembers;
  }

  getProgress() {
    for (let i = 0; i < this.teamMembers.length; i++) {
      console.log(this.teamMembers[i].getProgress());
    }
  }

  showTeam() {
    for (let i = 0; i < this.teamMembers.length; i++) {
      console.log(this.teamMembers[i].name);
    }
  }
}

module.exports = DevTeamLead;