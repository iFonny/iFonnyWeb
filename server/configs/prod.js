const path = require('path');
const fs = require('fs');

const config = {
	env: 'prod',
	root: path.normalize(`${__dirname}/..`),
	app: {
		name: 'iFonny'
	},
	url: 'http://ifonny.fr',
	api: 'http://api.ifonny.fr',
	logs: {
		webhook: 'https://discordapp.com/api/webhooks/340500939981062145/o_lk8TOx90Bmtg3-2f7GOqzWY80H3bMIW27g9Tc7FN0dbVR7-iW57mdqRHOOAngkKxBR',
		logType: 'combined',
		options: {
			/*stream: fs.createWriteStream(path.join(__dirname, '/..', 'access.log'), {
				flags: 'a'
			})*/
		}
	},
	port: process.env.PORT || 3001,
};

// Exports module
module.exports = config;