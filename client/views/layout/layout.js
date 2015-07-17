Template.layout.onCreated(function() {
  this.subscribe('background-images');
})

var currentIndex = 0;
var indexDep = new Tracker.Dependency();
Meteor.setInterval(function() {
  currentIndex++;
  if (currentIndex >= BackgroundImages.find().count()) {
    currentIndex = 0;
  }
  indexDep.changed();
}, 5000);

Template.layout.helpers({
  images: function() {
    return BackgroundImages.find().map(function(images, index) {
      images.index = index;
      return images;
    });
  },
  getOpacity: function() {
    indexDep.depend();
    return currentIndex == this.index ? 1: 0;
  }
})
