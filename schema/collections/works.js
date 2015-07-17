Works = new orion.collection('works', {
  singularName: 'work',
  pluralName: 'works',
  title: 'Works',
  link: {
    title: 'Works'
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('hasOne', 'categoryId', 'Category'),
      { data: 'description', title: 'Description' }
    ]
  }
});

Works.attachSchema(new SimpleSchema({
  categoryId: orion.attribute('hasOne', {
    label: 'Category'
  }, {
    collection: WorkSubmenus,
    titleField: 'title',
    publicationName: 'works_hasOne_work_submenus'
  }),
  image: orion.attribute('image'),
  description: {
    type: String,
    optional: true
  },
  createdAt: orion.attribute('createdAt')
}));
