window.addEventListener("load", function() {
window.cookieconsent.initialise({
	onInitialise: function(status) {
		if (this.hasConsented('required')) {
		}
		if (this.hasConsented('analytics')) {
			window['ga-disable-UA-149040088-1'] = false;
			gtag('config', gtagId);
		}
	},
	onAllow: function(category) {
		if (category == 'required') {
		}
		if (category == 'analytics') {
			window['ga-disable-UA-149040088-1'] = false;
			gtag('config', gtagId);
		}
	},
	onRevoke: function(category) {
		if (category == 'required') {
		}
		if (category == 'analytics') {
			window['ga-disable-UA-149040088-1'] = true;
		}
	}
})
});


