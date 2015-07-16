WorkSubmenus = new orion.collection('work_submenus', {
  singularName: 'submenu',
  pluralName: 'submenus',
  title: 'Work Submenus',
  link: {
    title: 'Work Submenus'
  },
  tabular: {
    columns: [
      { data: 'title', title: 'Title' }
    ]
  }
});

WorkSubmenus.attachSchema(new SimpleSchema({
  title: {
    type: String,
    unique: true
  },
  url: {
    type: String,
    unique: true,
    regEx: /^[a-z0-9A-Z_-]+$/
  }
}));
