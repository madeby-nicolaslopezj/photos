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

  WorkSubmenus.find().forEach(function(category) {
    var item = {
      page: Router.path('work.show', category),
      lastmod: new Date(),
      changefreq: 'weekly'
    };
    items.push(item);

    Works.find({ categoryId: category._id }).forEach(function(work) {
      var item = {
        page: Router.path('work.image', { url: category.url, _id: work._id }),
        lastmod: new Date(),
        changefreq: 'weekly'
      };
      if (work.image && work.image.url) {
        item.images = [{
          loc: work.image.url,
          caption: work.description || '',
          title: 'Work'
        }]
      }
      items.push(item);
    });
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

  var posts = orion.entities.posts.collection.find().forEach(function (post) {
    var item = {
      page: Router.path('blog.show', post),
      lastmod: post.updatedAt || post.createdAt,
      changefreq: 'weekly'
    };

    if (post.image && post.image.link) {
      item.images = [{
        loc: post.image.link,
        caption: post.preview,
        title: post.title
      }]
    }

    items.push(item);
  });

  return items;
});
