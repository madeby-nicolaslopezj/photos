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
      { data: 'description', title: 'Description' },
      { data: 'type', title: 'Tipo' }
    ]
  }
});

PublicationsTop.attachSchema(new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['interiorismo', 'mobiliario'],
    autoform: {
      noselect: true
    }
  },
  image: orion.attribute('image'),
  description: {
    type: String
  },
  description2: {
    type: String
  },
  createdAt: orion.attribute('createdAt')
}));
