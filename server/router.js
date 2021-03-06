const glob = require('glob');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const express = require('express');
const favicon = require('serve-favicon');
const expressVue = require('express-vue');
const bodyParser = require('body-parser');
const compression = require('compression');
const validator = require('express-validator');

module.exports = (config) => {
	const router = express.Router();

	__app.use(compression());

	__app.engine('vue', expressVue);
	__app.set('view engine', 'vue');
	__app.set('views', path.join(config.root, '/views'));
	__app.set('vue', {
		componentsDir: path.join(config.root, '/views/components'),
		defaultLayout: 'layout'
	});

	// Set static files to be served from '/assets'
	__app.use("/assets", express.static(`${config.root}/assets`));
	__app.use(favicon(path.join(config.root, 'assets', 'images', 'favicon.ico')));

	__app.use(bodyParser.json());
	__app.use(bodyParser.urlencoded({
		extended: true
	}));

	// Basic security advices from expressJS
	__app.disable('x-powered-by');
	__app.use(helmet());
	__app.use(validator());

	__app.use(logger(config.logs.logType, config.logs.options));

	// Routes
	__app.use('/', router);

	let controllers = glob.sync(`${config.root}/routes/*.js`, {
		ignore: [`${config.root}/routes/404.js`]
	});

	controllers.forEach(function (controller) {
		module.require(controller).default(router)
	});

	/* Handle 404 : Page not found */
	module.require(`${config.root}/routes/404.js`).default(router);
};