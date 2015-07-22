Publications = new orion.collection('publications_items', {
  singularName: 'publication',
  pluralName: 'publications',
  title: 'Items',
  link: {
    title: 'Items',
    parent: 'publications'
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('hasOne', 'parentId', 'Parent')
    ]
  }
});

Publications.attachSchema(new SimpleSchema({
  parentId: orion.attribute('hasOne', {
    label: 'Parent'
  }, {
    collection: PublicationsTop,
    titleField: 'description',
    publicationName: 'publications_items_hasOne_publications_top'
  }),
  description: {
    type: String,
    optional: true
  },
  image: orion.attribute('image'),
  createdAt: orion.attribute('createdAt')
}));
