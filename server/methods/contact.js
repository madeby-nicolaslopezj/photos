function nl2br (str, is_xhtml) {
	var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

String.prototype.escape = function() {
    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return nl2br(this.replace(/[&<>]/g, function(tag) {
        return tagsToReplace[tag] || tag;
    }));
};

Meteor.methods({
	sendContact: function (doc) {
		check(doc, ContactSchema);

		var html = "<b>" + doc.title + "</b><br>"
            + "<b>" + doc.email + "</b><br><br>"
            + doc.message.escape();

		this.unblock();

		Email.send({
			to: orion.dictionary.get('contact.email'),
			from: orion.config.get('MAIL_FROM'),
			subject: orion.dictionary.get('global.siteName') + ' - Contact',
			replyTo: doc.email,
			html: html
		})
	}
});
