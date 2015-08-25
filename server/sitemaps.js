sitemaps.add('/sitemap.xml', function() {

  var basicRoutes = ['home', 'clients', 'publications.index', 'bio'];

  var items = [];

  _.each(basicRoutes, function(routeName){
    items.push({
      page: Router.path(routeName),
      lastmod: new Date(),
      changefreq: 'weekly',
    })
  });

  Publications.find().forEach(function(publication) {
    var item = {
      page: Router.path('publications.show', publication),
      lastmod: new Date(),
      changefreq: 'weekly'
    };
    if (publication.image && publication.image.url) {
      item.images = [{
        loc: publication.image.url,
        caption: publication.description || '',
        title: 'Publication'
      }]
    }
    items.push(item);
  });

  return items;
});
