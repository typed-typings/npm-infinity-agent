import https = require('https');

export class Agent extends https.Agent {}
export var globalAgent: Agent;
