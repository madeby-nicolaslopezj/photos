Meteor.publish('worksByCategory', function(categoryId) {
  check(categoryId, String);
  return Works.find({ categoryId: categoryId });
})

Meteor.publish('work', function(workId) {
  check(workId, String);
  return Works.find({ _id: workId });
});
