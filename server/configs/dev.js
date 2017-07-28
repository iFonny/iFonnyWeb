const path = require('path');

const config = {
	env: 'dev',
	root: path.normalize(`${__dirname}/..`),
	app: {
		name: 'iFonny'
	},
	url: 'http://beta.ifonny.fr',
	logs: {
		webhook: 'https://discordapp.com/api/webhooks/340500939981062145/o_lk8TOx90Bmtg3-2f7GOqzWY80H3bMIW27g9Tc7FN0dbVR7-iW57mdqRHOOAngkKxBR',
		logType: 'dev',
		options: {}
	},
	port: process.env.PORT || 9000,
};

// Exports module
module.exports = config;