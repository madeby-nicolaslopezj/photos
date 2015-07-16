Template.header.onCreated(function() {
  this.subscribe('work-submenus');
})

Template.header.onRendered(function() {
  this.$('.dropdown-toggle').dropdown();
})

Template.header.helpers({
  submenus: function() {
    return WorkSubmenus.find({}, { sort: { title: 1 } });
  }
})

Template.header.events({
  'click .contact-link': function() {
    Session.set('contactOpacity', 1);
  }
})
