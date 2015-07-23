Template.workShow.onCreated(function() {
  var self = this;
  self.subscribe('work-submenus');
  self.autorun(function() {
    var category = WorkSubmenus.findOne({ url: Router.current().params.url });
    if (category) {
      self.subscribe('worksByCategory', category._id);
    }
  })
})

Template.workShow.helpers({
  category: function() {
    return WorkSubmenus.findOne({ url: Router.current().params.url });
  },
  images: function() {
    var category = WorkSubmenus.findOne({ url: Router.current().params.url });
    if (!category) return [];
    return Works.find({ categoryId: category._id }, { sort: { createdAt: -1, _id: 1 } });
  }
})

Template.workShow.events({
  'click .image-thumb': function(event, template) {
    var id = $(event.currentTarget).attr('data-id');
    Router.go('work.image', { url: this.url, _id: id });
  }
})
