window.addEventListener("load", function (event) {

	// Load scene
	HYPE.documents["MeniFonny"].showSceneNamed(app.page);

	// Hype functions override
	var hypeFunctions = HYPE.documents["MeniFonny"].functions();
	var nbLoadingImages = 2;

	hypeFunctions.menuHomeButton = function (hypeDocument, element, event) {
		// Loading reset and randy gif
		app.loading.status = true;
		app.loading.image = `/assets/images/loading-${Math.floor(Math.random() * nbLoadingImages) + 1}.gif`;

		app.page = 'home';
		document.title = app.title = 'iFonny - Home';
		history.pushState(null, null, app.page);

		// TODO: Request API /page/home
		axios.get('http://api.ifonny.fr/page/home')
			.then(function (response) {
				app.data = response.data;
				app.loading.status = false;
			})
			.catch(function (error) {
				console.error('ERROR: GET /page/home');
				console.error(error);
			});
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