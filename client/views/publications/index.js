var cellHeight = 300;

Template.publicationsIndex.onCreated(function() {
  this.subscribe('publications_top');
  this.subscribe('publications_all');
})

Template.publicationsIndex.helpers({
  images: function() {
    return PublicationsTop.find({}, { sort: { createdAt: -1, _id: 1 } });
  },
  getFirstId: function() {
    var first = Publications.findOne({ parentId: this._id }, { sort: { createdAt: -1, _id: 1 } });
    return first && first._id;
  }
})
