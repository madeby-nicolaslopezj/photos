BackgroundImages = new orion.collection('background_images', {
  singularName: 'image',
  pluralName: 'images',
  title: 'Background Images',
  link: {
    title: 'Background Images'
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Image')
    ]
  }
});

BackgroundImages.attachSchema(new SimpleSchema({
  image: orion.attribute('image')
}));
