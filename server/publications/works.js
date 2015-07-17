Meteor.publish('worksByCategory', function(categoryId) {
  check(categoryId, String);
  return Works.find({ categoryId: categoryId });
})
