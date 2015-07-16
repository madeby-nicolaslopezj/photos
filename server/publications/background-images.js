Meteor.publish('background-images', function() {
  return BackgroundImages.find();
})
