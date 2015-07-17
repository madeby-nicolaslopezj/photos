var getNext = function() {
  var items = Publications.find({}, { sort: { createdAt: -1 } }).fetch();
  var current = _.findWhere(items, { _id: Router.current().params._id });
  var index = _.indexOf(items, current);
  if (index == -1) return;
  if (index == (items.length -1)) return;

  return items[index + 1];
}

var getPrevious = function() {
  var items = Publications.find({}, { sort: { createdAt: -1 } }).fetch();
  var current = _.findWhere(items, { _id: Router.current().params._id });
  var index = _.indexOf(items, current);
  if (index == -1) return;
  if (index == 0) return;

  return items[index - 1];
}

Template.publicationsShow.onCreated(function() {
  this.subscribe('publications');
});

Template.publicationsShow.onRendered(function() {
  this.$('.dropdown-toggle').dropdown();
})

Template.publicationsShow.helpers({
  hasNext: function() {
    return getNext();
  },
  hasPrevious: function() {
    return getPrevious();
  },
  publication: function() {
    return Publications.findOne({ _id: Router.current().params._id });
  },
  currentUrl: function() {
    Router.current();
    return encodeURIComponent(window.location.href);
  }
})

Template.publicationsShow.events({
  'click .close-btn': function() {
    Router.go('publications.index');
  },
  'click .right-btn': function() {
    if (!getNext()) return;
    Router.go('publications.show', { _id: getNext()._id });
  },
  'click .left-btn': function() {
    if (!getPrevious()) return;
    Router.go('publications.show', { _id: getPrevious()._id });
  }
})
