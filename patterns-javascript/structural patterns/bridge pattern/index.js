const SimpleRemoteControl = require("./simple-remote-control");
const InvertorRemoteControl = require("./invertor-remote-control");
const SimpleAC = require("./simple-ac");
const InvertorAC = require("./invertor-ac");


const simpleAC = new SimpleAC();
const invertorAC = new InvertorAC();

const simpleRemote = new SimpleRemoteControl(simpleAC);
const invertorRemote = new InvertorRemoteControl(invertorAC);

simpleRemote.on();
simpleRemote.setTemparature(16);
simpleRemote.off();

invertorRemote.on();
invertorRemote.heat();
invertorRemote.setTemparature(22);
invertorRemote.off();