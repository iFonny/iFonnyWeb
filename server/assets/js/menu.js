window.addEventListener("load", function (event) {

	// Load scene
	HYPE.documents["MeniFonny"].showSceneNamed(app.page);

	// Hype functions override
	let hypeFunctions = HYPE.documents["MeniFonny"].functions();

	hypeFunctions.menuHomeButton = function (hypeDocument, element, event) {
		app.page = 'home';
		document.title = app.title = 'iFonny - Home';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
		console.log(element);
	};
	hypeFunctions.menuGlandsButton = function (hypeDocument, element, event) {
		app.page = 'glands';
		document.title = app.title = 'iFonny - Glands';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
	};
	hypeFunctions.menuMoreButton = function (hypeDocument, element, event) {
		app.page = 'more';
		document.title = app.title = 'iFonny - More';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
	};
	hypeFunctions.menuProjetsButton = function (hypeDocument, element, event) {
		app.page = 'projets';
		document.title = app.title = 'iFonny - Projets';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
	};
	hypeFunctions.menuSmurfsButton = function (hypeDocument, element, event) {
		app.page = 'smurfs';
		document.title = app.title = 'iFonny - Smurfs';
		history.pushState(null, null, app.page);
		app.data = 'TODO: REQUEST DATA';
	};
});