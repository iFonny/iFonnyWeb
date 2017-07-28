const express = require('express');
const config = require('./configs/cursor');
const router = require('./router');

global.__app = express();
__app.set('config', config);

/* Logs init */
require('./utils/logs').initLogs();

router(config);

__app.listen(config.port, () => {
	__logInfo('Express server listening on port ' + config.port);
});