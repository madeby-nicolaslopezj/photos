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

Router.route('/work/:url', {
  name: 'work.show',
  controller: 'SiteController'
});

Router.route('/work/:url/:_id', {
  name: 'work.image',
	loadingTemplate: 'workImage',
	fastRender: true,
	waitOn: function() {
		return Meteor.subscribe('work', this.params._id);
	},
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var work = Works.findOne({ _id: this.params._id });
		if (!work) return;
		SEO.set({
			title: orion.dictionary.get('seo.title'),
			link: {
				icon: orion.dictionary.get('seo.favIcon.url'),
			},
			meta: {
				description: work.description || orion.dictionary.get('seo.description')
			},
			og: {
				title: orion.dictionary.get('seo.title'),
				description: work.description || orion.dictionary.get('seo.description'),
				image: work.image.url
			}
		});
	}
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
  name: 'publications.top',
  controller: 'SiteController'
});

Router.route('/publications-item/:_id', {
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
