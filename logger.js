import fileTransport from './file_transport';
import consoleTransport from './console_transport';
import moment from 'moment';

module.exports = function log(level, processName, message, consoleLogLevels, fileLogLevels, path) {
	if (fileLogLevels.indexOf(level) > -1){
		let msg = format(level, processName, message);
		fileTransport(msg, path);
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