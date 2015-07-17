var getNext = function() {
  var category = WorkSubmenus.findOne({ url: Router.current().params.url });
  if (!category) return;
  var works = Works.find({ categoryId: category._id }, { sort: { createdAt: -1 } }).fetch();
  var current = _.findWhere(works, { _id: Router.current().params._id });
  var index = _.indexOf(works, current);
  if (index == -1) return;
  if (index == (works.length -1)) return;

  return works[index + 1];
}

var getPrevious = function() {
  var category = WorkSubmenus.findOne({ url: Router.current().params.url });
  if (!category) return;
  var works = Works.find({ categoryId: category._id }, { sort: { createdAt: -1 } }).fetch();
  var current = _.findWhere(works, { _id: Router.current().params._id });
  var index = _.indexOf(works, current);
  if (index == -1) return;
  if (index == 0) return;

  return works[index - 1];
}

Template.workImage.onCreated(function() {
  var self = this;
  self.subscribe('work-submenus');
  self.autorun(function() {
    var category = WorkSubmenus.findOne({ url: Router.current().params.url });
    if (category) {
      self.subscribe('worksByCategory', category._id);
    }
  })
});

Template.workImage.onRendered(function() {
  this.$('.dropdown-toggle').dropdown();
})

Template.workImage.helpers({
  hasNext: function() {
    return getNext();
  },
  hasPrevious: function() {
    return getPrevious();
  },
  work: function() {
    return Works.findOne({ _id: Router.current().params._id });
  }
})

Template.workImage.events({
  'click .close-btn': function() {
    Router.go('work.show', Router.current().params);
  },
  'click .right-btn': function() {
    if (!getNext()) return;
    Router.current().params._id = getNext()._id;
    Router.go('work.image', Router.current().params);
  },
  'click .left-btn': function() {
    if (!getPrevious()) return;
    Router.current().params._id = getPrevious()._id;
    Router.go('work.image', Router.current().params);
  }
})
