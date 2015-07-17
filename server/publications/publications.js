Meteor.publish('publications', function() {
  return Publications.find({});
})

Meteor.publish('publication', function(publicationId) {
  check(publicationId, String);
  return Publications.find({ _id: publicationId });
})
