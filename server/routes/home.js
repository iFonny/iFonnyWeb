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
			list: [{
				network: 'Instagram',
				username: 'ifonny_',
				url: 'https://www.instagram.com/ifonny_/',
				image: '/assets/images/social/instagram.png'
			}, {
				network: 'Discord',
				username: 'iFonny#6666',
				url: 'http://igland.ifonny.fr',
				image: '/assets/images/social/discord.png'
			}, {
				network: 'Battle.net',
				username: 'iFonny#2881',
				url: 'http://eu.battle.net/fr/',
				image: '/assets/images/social/battlenet.png'
			}, {
				network: 'League Of Legends',
				username: 'iFonny',
				url: '/smurfs',
				image: '/assets/images/social/lol.png'
			}, {
				network: 'Snapchat',
				username: 'iphonitest',
				url: 'https://www.snapchat.com/',
				image: '/assets/images/social/snapchat.png'
			}, {
				network: 'Twitch',
				username: 'iFonny',
				url: 'https://www.twitch.tv/ifonny',
				image: '/assets/images/social/twitch.png'
			}, {
				network: 'Reddit',
				username: 'iFonny',
				url: 'https://www.reddit.com/user/iFonny',
				image: '/assets/images/social/reddit.png'
			}, {
				network: 'Steam',
				username: 'iFonny',
				url: 'http://steamcommunity.com/id/ifonny/',
				image: '/assets/images/social/steam.png'
			}]
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