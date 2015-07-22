Meteor.publish('publications_top', function() {
  return PublicationsTop.find({});
})

Meteor.publish('top_publication', function(itemId) {
  check(itemId, String);
  return PublicationsTop.find({ _id: itemId });
});

Meteor.publish('publications_all', function() {
  return Publications.find({});
});

Meteor.publish('publications', function(parentId) {
  check(parentId, String);
  return Publications.find({ parentId: parentId });
});

Meteor.publish('publication', function(publicationId) {
  check(publicationId, String);
  return Publications.find({ _id: publicationId });
});
