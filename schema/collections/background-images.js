BackgroundImages = new orion.collection('background_images', {
  singularName: 'image',
  pluralName: 'images',
  title: 'Background Images',
  link: {
    title: 'Background Images'
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Image'),
      {  title: 'Edit', render: function(val, type, doc) { return '<a class="btn btn-default btn-xs" href="' + Router.path('collections.background_images.update', doc) + '">Edit</a>' } }
    ]
  }
});

BackgroundImages.attachSchema(new SimpleSchema({
  image: orion.attribute('image')
}));
