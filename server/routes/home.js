exports.default = (router) => {
	const config = __app.get('config');

	router.get('/home', (req, res, next) => {
		__axios.get(`${config.api}/page/home`)
			.then(function (response) {
				homeScope.data.data = response.data;
				res.render(pageName, homeScope);
			})
			.catch(function (error) {
				__logError('ERROR: GET /page/home');
				__logError(error);
				res.render(pageName, homeScope);
			});
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
			status: false,
			image: `/assets/images/loading-${Math.floor(Math.random() * nbLoadingImages) + 1}.gif`,
			message: 'Soon'
		},
		data: {
			title: '',
			main: {
				twitter: {
					username: 'iFonny_',
					url: 'https://twitter.com/iFonny_',
					image: '/assets/images/twitter.png'
				},
				youtube: {
					username: 'iFonny',
					url: 'https://www.youtube.com/user/iphonitest',
					image: '/assets/images/youtube.png'
				},
				discord: {
					username: 'iGland',
					url: 'http://igland.ifonny.fr',
					image: '/assets/images/discord.png'
				}
			},
			list: []
		}
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