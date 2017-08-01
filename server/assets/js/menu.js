window.addEventListener("load", function (event) {

	// Load scene
	HYPE.documents["MeniFonny"].showSceneNamed(app.page);

	// Hype functions override
	var hypeFunctions = HYPE.documents["MeniFonny"].functions();
	var nbLoadingImages = 2;

	hypeFunctions.menuHomeButton = function (hypeDocument, element, event) {
		// Loading reset and randy gif
		app.loading.status = false;
		app.loading.image = `/assets/images/loading-${Math.floor(Math.random() * nbLoadingImages) + 1}.gif`;

		app.page = 'home';
		document.title = app.title = 'iFonny - Home';
		history.pushState(null, null, app.page);

		// TODO: Request API /page/home
		app.data = {
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
		};
	};
	hypeFunctions.menuGlandsButton = function (hypeDocument, element, event) {
		// Loading reset and randy gif
		app.loading.status = true;
		app.loading.image = `/assets/images/loading-${Math.floor(Math.random() * nbLoadingImages) + 1}.gif`;

		app.page = 'glands';
		document.title = app.title = 'iFonny - Glands';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
	};
	hypeFunctions.menuMoreButton = function (hypeDocument, element, event) {
		// Loading reset and randy gif
		app.loading.status = true;
		app.loading.image = `/assets/images/loading-${Math.floor(Math.random() * nbLoadingImages) + 1}.gif`;

		app.page = 'more';
		document.title = app.title = 'iFonny - More';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
	};
	hypeFunctions.menuProjetsButton = function (hypeDocument, element, event) {
		// Loading reset and randy gif
		app.loading.status = true;
		app.loading.image = `/assets/images/loading-${Math.floor(Math.random() * nbLoadingImages) + 1}.gif`;

		app.page = 'projets';
		document.title = app.title = 'iFonny - Projets';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
	};
	hypeFunctions.menuSmurfsButton = function (hypeDocument, element, event) {
		// Loading reset and randy gif
		app.loading.status = true;
		app.loading.image = `/assets/images/loading-${Math.floor(Math.random() * nbLoadingImages) + 1}.gif`;

		app.page = 'smurfs';
		document.title = app.title = 'iFonny - Smurfs';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
	};

	// Loading 
	var points = 0;
	setInterval(function () {
		if (app.loading.status) {
			if (points == 3) {
				app.loading.message = app.loading.message.slice(0, -3);
				points = 0;
			} else {
				app.loading.message += '.';
				points += 1;
			}
		}
	}, 300);
});

function resizeIframe(obj) {
	obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}