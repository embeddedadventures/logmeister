const fileTransport = require('./file_transport');
const consoleTransport = require('./console_transport');
const moment = require('moment');

module.exports = function log(level, processName, message, consoleLogLevels, fileLogLevels, path, filename) {
	if (fileLogLevels.indexOf(level) > -1){
		let msg = format(level, processName, message);
		fileTransport(msg, path, filename);
	}
	if (consoleLogLevels.indexOf(level) > -1){
		let msg = format(level, processName, message);
		consoleTransport(level, msg);
	}
}

function format(level, processName, message) {
	let dateNow = moment(new Date).format("YYYY-MM-DD HH:mm:ss.SSS");
	return `${dateNow} ${level} ${processName} ${message}`;
}