const os = require('os');
const fs = require('fs');
const moment = require('moment');
const delay = require('delay');

const eol = os.EOL;

let basepath;
let oldFileDate = moment(new Date).format("YYYY-MM-DD");
let logging = false;
let canLog = true;
let currentFileDate;
let stream;
let filename;
let filenameArg;

let writeArray = [];

// Logs to file
async function log(message, path, fnArg) {
	filenameArg = fnArg;
	basepath = path;
	filename = basepath + filenameArg + ".log";
	await checkFileDate();
	if (!stream) openFile();
	await write(message);
}

// Check the file date and change the file
async function checkFileDate() {
	currentFileDate = moment(new Date).format("YYYY-MM-DD");
	if (oldFileDate != currentFileDate) {
		canLog = false;
		while (logging) {
			await delay(100);
		}
		closeFile();
		let oldFilename = basepath + filenameArg + oldFileDate + '.log';
		fs.renameSync(filename, oldFilename);
		oldFileDate = currentFileDate;
		openFile();
	}
}

async function write(message) {
	if (!stream) {
		let dateNow = moment(new Date).format("YYYY-MM-DD HH:mm:ss.SSS");
		console.log(`${dateNow} info Logmeister Opening file`);
		await openFile();
	}
	if (logging || !canLog) {
		writeArray.push(message);
		return;
	}
	logging = true;
	canLog = stream.write(message + eol);
	logging = false;
	if (!canLog) writeArray.push(message);
}

// Open file stream
async function openFile() {
	stream = fs.createWriteStream(filename, {flags: 'a'});
	canLog = true;
	stream.on('drain', () => {
		logging = true;
		while(writeArray.length>0) {
			let isWritten = stream.write(writeArray.shift() + eol);
			if (!isWritten) {
				logging = false;
				return;
			}
		}
		logging = false;
		canLog = true;
	});
}

// Close file stream
async function closeFile() {
	stream.end();
	return ;
}

module.exports = log;