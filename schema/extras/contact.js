ContactSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 50,
    optional: true
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail address"
  },
  message: {
    type: String,
    label: "Message",
    max: 1000
  }
});
