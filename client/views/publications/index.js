var cellHeight = 240;

Template.publicationsIndex.onCreated(function() {
  this.subscribe('publications');
})

Template.publicationsIndex.onRendered(function() {
  this.autorun(function() {
    var items = Publications.find({}, { sort: { createdAt: -1 } }).fetch();
    if (!items) return;

  	$(window).resize(function() {
      $('.images').empty().justifiedImages({
        images: items,
        rowHeight: 200,
        maxRowHeight: 400,
        thumbnailPath: function(item, width, height) {
          return item.image.url;
        },
        getSize: function(item) {
          return { width: item.image.info.width, height: item.image.info.height };
        },
        template: function(data, index) {
          console.log(this);
          return '<div class="photo-container" style="height:' + data.displayHeight + 'px;margin-right:' + data.marginRight + 'px;">' +
              '<div data-id="' + data._id + '" class="image-rollover"><p>' + data.description + '</p></div>' +
              '<img class="image-thumb" src="' + data.src + '" style="width:' + data.displayWidth + 'px;height:' + data.displayHeight + 'px;" >' +
              '</div>';
        },
        margin: 5
      });
    });
    $(window).resize();
  })
})

Template.publicationsIndex.events({
  'click .image-rollover': function(event, template) {
    var id = $(event.currentTarget).attr('data-id');
    Router.go('publications.show', { _id: id });
  }
})
