import http = require('http');

export class Agent extends http.Agent {}
export var globalAgent: Agent;
