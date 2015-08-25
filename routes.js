SiteController = RouteController.extend({
	layoutTemplate: 'layout',
  fastRender: true,
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		SEO.set({
			title: orion.dictionary.get('seo.title'),
			link: {
				icon: orion.dictionary.get('seo.favIcon.url'),
			},
			meta: {
				description: orion.dictionary.get('seo.description')
			},
			og: {
				title: orion.dictionary.get('seo.title'),
				description: orion.dictionary.get('seo.description'),
				image: orion.dictionary.get('seo.image.url')
			}
		});
	}
});

Router.route('/', {
  name: 'home',
  controller: 'SiteController'
});

Router.route('/clients', {
  name: 'clients',
  controller: 'SiteController'
});

Router.route('/item/:_id', {
  name: 'publications.show',
	loadingTemplate: 'publicationsShow',
	fastRender: true,
	waitOn: function() {
		return Meteor.subscribe('publication', this.params._id);
	},
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var publication = Publications.findOne({ _id: this.params._id });
		if (!publication) return;
		SEO.set({
			title: orion.dictionary.get('seo.title'),
			link: {
				icon: orion.dictionary.get('seo.favIcon.url'),
			},
			meta: {
				description: publication.description || orion.dictionary.get('seo.description')
			},
			og: {
				title: orion.dictionary.get('seo.title'),
				description: publication.description || orion.dictionary.get('seo.description'),
				image: publication.image.url
			}
		});
	}
});

Router.route('/bio', {
  name: 'bio',
  controller: 'SiteController'
});

Router.route('/construccion', {
  name: 'construction',
  controller: 'SiteController'
});

Router.route('/:type/:_id', {
  name: 'publications.top',
  controller: 'SiteController'
});

Router.route('/:type', {
  name: 'publications.index',
  controller: 'SiteController'
});
