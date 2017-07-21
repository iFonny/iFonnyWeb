const path = require('path');
const fs = require('fs');

const config = {
	env: 'prod',
	root: path.normalize(`${__dirname}/..`),
	app: {
		name: 'iFonny'
	},
	logs: {
		logType: 'combined',
		options: {
			stream: fs.createWriteStream(path.join(__dirname, '/..', 'access.log'), {
				flags: 'a'
			})
		}
	},
	port: process.env.PORT || 80,
};

// Exports module
module.exports = config;