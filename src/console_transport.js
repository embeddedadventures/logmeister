// Logs to file
module.exports = async function(level, message) {
	if (level=='error') {
		console.error(message);
	} else if (level=='warn') {
		console.warn(message);
	} else {
		console.log(message);
	}
};