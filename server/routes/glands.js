exports.default = (router) => {
	const config = __app.get('config');

	router.get('/glands', (req, res, next) => {
		res.render('glands', homeScope);
	});
};

const pageTitle = 'iFonny - Glands';
const homeScope = {
	data: {
		title: pageTitle,
		content: pageTitle,
	},
	vue: {
		head: {
			title: pageTitle,
			meta: [{
					property: 'og:title',
					content: pageTitle
				},
				{
					name: 'twitter:title',
					content: pageTitle
				},
				{
					/* Main CSS */
					style: '/assets/css/main.css'
				},
				{
					/* SMURFS/GLANDS Page CSS */
					style: '/assets/css/smurfs.css'
				},
				{
					/* HOME Page CSS */
					style: '/assets/css/home.css'
				}
			],
			structuredData: {
				"@context": "http://schema.org",
				"@type": "WebPage",
				"name": pageTitle,
				"description": "slt t bienvenu cher moi",
			}
		}
	}
};