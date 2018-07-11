// Logs to file
async function log(level, message) {
	if (level=='error') {
		console.error(message);
	} else if (level=='warn') {
		console.warn(message);
	} else {
		console.log(message);
	}
}

module.exports = log;