Meteor.publish('publications', function() {
  return Publications.find({});
})
