orion.dictionary.addDefinition('title', 'seo', {
	type: String,
	label: 'Title of the page'
});

orion.dictionary.addDefinition('description', 'seo', {
	type: String,
	label: 'Description',
	autoform: {
		type: 'textarea'
	}
});

orion.dictionary.addDefinition('image', 'seo',
  orion.attribute('image')
);

orion.dictionary.addDefinition('favIcon', 'seo',
  orion.attribute('image')
);
