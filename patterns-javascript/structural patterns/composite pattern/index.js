const Developers = require("./developers");
const DevTeamLead = require("./dev-team-lead");


const seniorDev = new Developers("Rachel", "Senior Developer", "60%");
const juniorDev = new Developers("Joey", "Junior Developer", "50%");
const teamLead = new DevTeamLead("Regina", "Dev Team Lead", "90%");

teamLead.addMember(seniorDev);
teamLead.addMember(juniorDev);

console.log("Team members list:");
teamLead.showTeam();

console.log("Get Team members progress:");
teamLead.getProgress();

console.log("Removing Rachel from team!");
teamLead.removeMember(seniorDev);

console.log("Updated team members list:");
teamLead.showTeam();

const freelanceDev = new Developers("Ross", "Free Lancer", "80%");
console.log("Get freelance developer's progress:");
console.log(freelanceDev.getProgress());