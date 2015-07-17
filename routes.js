SiteController = RouteController.extend({
	layoutTemplate: 'layout',
  fastRender: true,
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
    console.log('cacac saducansdfas ');
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

Router.route('/work/:url', {
  name: 'work.show',
  controller: 'SiteController'
});

Router.route('/work/:url/:_id', {
  name: 'work.image',
	layoutTemplate: null,
  controller: 'SiteController'
});

Router.route('/clients', {
  name: 'clients',
  controller: 'SiteController'
});

Router.route('/publications', {
  name: 'publications.index',
  controller: 'SiteController'
});

Router.route('/publications/:_id', {
  name: 'publications.show',
	layoutTemplate: null,
  controller: 'SiteController'
});

Router.route('/bio', {
  name: 'bio',
  controller: 'SiteController'
});
