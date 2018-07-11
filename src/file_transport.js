import os from 'os';
import fs from 'fs';
import path from 'path';
import moment from 'moment';
import delay from 'delay';

const eol = os.EOL;

let basepath;
let oldFileDate = moment(new Date).format("YYYY-MM-DD");
let logging = false;
let canLog = true;
let currentFileDate;
let stream;
let filename;

// Logs to file
async function log(message, path) {
	basepath = path;
	filename = basepath + 'app.log';
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
		let oldFilename = basepath + oldFileDate + '.log';
		fs.renameSync(filename, oldFilename);
		oldFileDate = currentFileDate;
		openFile();
	}
}

async function write(message) {
	if (!stream) openFile();
	while (!canLog) {
		await delay(100);
	}
	logging = true;
	canLog = stream.write(message + eol);
	if (!canLog) write(message);
	if (canLog) logging = false;
}

// Open file stream
async function openFile() {
	stream = fs.createWriteStream(filename, {flags: 'a'});
	canLog = true;
	stream.on('drain', () => {
		canLog = true;
	});
}

// Close file stream
async function closeFile() {
	stream.end();
	return ;
}

module.exports = log;