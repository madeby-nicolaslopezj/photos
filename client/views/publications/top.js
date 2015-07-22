var cellHeight = 220;

Template.publicationsTop.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('top_publication', Router.current().params._id);
    self.subscribe('publications', Router.current().params._id);
  })
})

Template.publicationsTop.onRendered(function() {
  this.autorun(function() {
    var items = Publications.find({ parentId: Router.current().params._id }, { sort: { createdAt: -1, _id: 1 } }).fetch();
    if (!items) return;

  	$(window).resize(function() {
      $('.images').empty().justifiedImages({
        images: items,
        rowHeight: cellHeight,
        maxRowHeight: cellHeight + 30,
        thumbnailPath: function(item, width, height) {
          return item.image.url;
        },
        getSize: function(item) {
          return { width: item.image.info.width, height: item.image.info.height };
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

Template.publicationsTop.helpers({
  top: function() {
    return PublicationsTop.findOne({ _id: Router.current().params._id });
  }
})

Template.publicationsTop.events({
  'click .image-thumb': function(event, template) {
    var id = $(event.currentTarget).attr('data-id');
    Router.go('publications.show', { _id: id });
  }
})
