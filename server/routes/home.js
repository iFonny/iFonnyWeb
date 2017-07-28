exports.default = (router) => {
	const config = __app.get('config');

	router.get('/home', (req, res, next) => {
		res.render(pageName, homeScope);
	});
};

const pageTitle = 'iFonny - Home';
const pageName = 'home';
const nbLoadingImages = 2;

const homeScope = {
	data: {
		page: pageName,
		title: pageTitle,
		loading: {
			status: true,
			image: `/assets/images/loading-${Math.floor(Math.random() * nbLoadingImages) + 1}.gif`,
			message: 'Soon'
		},
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