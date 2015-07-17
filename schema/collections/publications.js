Publications = new orion.collection('publications', {
  singularName: 'publication',
  pluralName: 'publications',
  title: 'Publications',
  link: {
    title: 'Publications'
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Image'),
      { data: 'description', title: 'Description' }
    ]
  }
});

Publications.attachSchema(new SimpleSchema({
  image: orion.attribute('image'),
  description: {
    type: String
  },
  createdAt: orion.attribute('createdAt')
}));
