Meteor.publish('work-submenus', function() {
  return WorkSubmenus.find();
})
