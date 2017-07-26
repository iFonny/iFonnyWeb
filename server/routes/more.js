exports.default = (router) => {
	const config = __app.get('config');

	router.get('/more', (req, res, next) => {
		res.render(pageName, homeScope);
	});
};

const pageTitle = 'iFonny - More';
const pageName = 'more';

const homeScope = {
	data: {
		page: pageName,
		title: pageTitle,
		data: pageTitle,
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
					/* Menu JS script */
					script: '/assets/js/menu.js'
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
				"description": "slt t bienvenu cher iFonny le gland",
			}
		},
		components: ['home-content', 'glands-content', 'more-content', 'projets-content', 'smurfs-content', 'not-found-content']
	}
};