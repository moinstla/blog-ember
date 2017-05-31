import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  created: DS.attr(),
  text: DS.attr(),
  image: DS.attr()
});
