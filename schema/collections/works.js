Works = new orion.collection('works', {
  singularName: 'work',
  pluralName: 'works',
  title: 'Works',
  link: {
    title: 'Works'
  },
  tabular: {
    columns: [
      { data: 'image', title: 'image' }
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
  image: orion.attribute('image')
}));
