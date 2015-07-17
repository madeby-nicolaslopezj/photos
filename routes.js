Router.route('/', {
  name: 'home',
  layoutTemplate: 'layout'
});

Router.route('/work/:url', {
  name: 'work.show',
  layoutTemplate: 'layout'
});

Router.route('/work/:url/:_id', {
  name: 'work.image'
});
