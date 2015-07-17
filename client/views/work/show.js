var cellHeight = 240;

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

Template.workShow.onRendered(function() {
  this.autorun(function() {
    var category = WorkSubmenus.findOne({ url: Router.current().params.url });
    if (!category) return;
    var works = Works.find({ categoryId: category._id }, { sort: { createdAt: -1, _id: 1 } }).fetch();
    if (!works) return;

  	$(window).resize(function() {
      $('.images').empty().justifiedImages({
        images: works,
        rowHeight: 200,
        maxRowHeight: 400,
        thumbnailPath: function(work, width, height) {
          return work.image.url;
        },
        getSize: function(work) {
          return { width: work.image.info.width, height: work.image.info.height };
        },
        template: function(data, index) {
          return '<div class="photo-container" style="height:' + data.displayHeight + 'px;margin-right:' + data.marginRight + 'px;">' +
              '<img data-id="' + data._id + '" class="image-thumb" src="' + data.src + '" style="width:' + data.displayWidth + 'px;height:' + data.displayHeight + 'px;" >' +
              '</div>';
        },
        margin: 5
      });
    });
    $(window).resize();
  })
})

Template.workShow.helpers({
  category: function() {
    return WorkSubmenus.findOne({ url: Router.current().params.url });
  }
})

Template.workShow.events({
  'click .image-thumb': function(event, template) {
    var id = $(event.currentTarget).attr('data-id');
    Router.go('work.image', { url: this.url, _id: id });
  }
})
