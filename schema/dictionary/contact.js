orion.dictionary.addDefinition('title', 'contact', {
  type: String,
  defaultValue: 'Contact'
});

orion.dictionary.addDefinition('toTitle', 'contact', {
  type: String
});

orion.dictionary.addDefinition('successMessage', 'contact', {
  type: String,
  defaultValue: 'Thanks!'
});

orion.dictionary.addDefinition('image', 'contact',
  orion.attribute('image')
);

orion.dictionary.addDefinition('email', 'contact', {
  type: String,
  regEx: SimpleSchema.RegEx.Email,
  defaultValue: 'nicolaslopezj@me.com'
});

orion.dictionary.addDefinition('text', 'contact',
  orion.attribute('froala')
);
