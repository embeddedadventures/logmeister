const logger = require('./logger');

let consoleLogLevels = ['info', 'error', 'warn']
let fileLogLevels = ['info', 'error', 'debug', 'warn']
let loggerPath = process.cwd() + '/logs/'
let filename = 'app'

function setOptions(console, file, lPath, filenameArg) {
	if (console) consoleLogLevels = console
	if (file) fileLogLevels = file
	if (lPath) loggerPath = lPath
	if (filenameArg) filename = filenameArg
}

function log(level, processName, message) {
	logger(level, processName, message, consoleLogLevels, fileLogLevels, loggerPath, filename)
}

function info(processName, message) {
	log('info', processName, message);
}

function error(processName, message) {
	log('error', processName, message);
}

function debug(processName, message) {
	log('debug', processName, message);
}

function verbose(processName, message) {
	log('verbose', processName, message);
}

function warn(processName, message) {
	log('warn', processName, message);
}

module.exports = {
	setOptions: setOptions,
	log: log,
	info: info,
	error: error,
	debug: debug,
	verbose: verbose,
	warn: warn
}