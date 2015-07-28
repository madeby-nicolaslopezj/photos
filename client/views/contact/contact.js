Template.contact.onRendered(function() {
  Session.set('emailSent', false);
  Session.set('contactOpacity', 0);
  Session.set('real_contactOpacity', 0);
  this.autorun(function() {
    var visible = Session.get('contactOpacity');
    if (visible) {
      $('.contact').css({ display: 'block' });
      Meteor.setTimeout(function() {
        Session.set('emailSent', false);
        Session.set('real_contactOpacity', 1);
      }, 10);
    } else {
      Session.set('real_contactOpacity', 0);
      Meteor.setTimeout(function() {
        $('.contact').css({ display: 'none' });
      }, 500);
    }
  })
});

Template.contact.helpers({
  getOpacity: function() {
    return Session.get('real_contactOpacity');
  },
  emailSent: function() {
    return Session.get('emailSent');
  }
});

Template.contact.events({
  'click .cancel-col': function() {
    Session.set('contactOpacity', 0);
  },
  'click .send-col': function(event, template) {
    template.$('form').submit();
  }
});

AutoForm.addHooks('contactForm', {
	onSuccess: function(formType, result) {
		Session.set('emailSent', true)
	},
});
