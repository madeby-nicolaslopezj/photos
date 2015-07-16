Template.workShow.onCreated(function() {
  this.subscribe('work-submenus');
})

Template.workShow.helpers({
  category: function() {
    return WorkSubmenus.findOne({ url: Router.current().params.url });
  }
})
