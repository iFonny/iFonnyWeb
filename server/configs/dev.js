const path = require('path');

const config = {
	env: 'dev',
	root: path.normalize(`${__dirname}/..`),
	app: {
		name: 'iFonny'
	},
	logs: {
		logType: 'dev',
		options: {}
	},
	port: process.env.PORT || 9000,
};

// Exports module
module.exports = config;