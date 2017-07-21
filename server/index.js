const express = require('express');
const config = require('./configs/cursor');
const router = require('./router');

//console.error(config);

global.__app = express();

router(config);

__app.listen(config.port, () => {
	console.log('Express server listening on port ' + config.port);
});