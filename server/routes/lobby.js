exports.default = (router) => {
	const config = __app.get('config');

	router.get('/', (req, res, next) => {
		res.sendFile(`${config.root}/assets/lobby/lobby.html`);
	});
};