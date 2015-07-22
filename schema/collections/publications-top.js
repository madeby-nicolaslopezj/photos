if (Meteor.isClient) {
  orion.links.add({
    identifier: 'publications',
    title: 'Publications',
    index: 50
  });
}
PublicationsTop = new orion.collection('publications_top', {
  singularName: 'publication',
  pluralName: 'publications',
  title: 'Top',
  link: {
    title: 'Top',
    parent: 'publications'
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Image'),
      { data: 'description', title: 'Description' }
    ]
  }
});

PublicationsTop.attachSchema(new SimpleSchema({
  image: orion.attribute('image'),
  description: {
    type: String
  },
  createdAt: orion.attribute('createdAt')
}));
