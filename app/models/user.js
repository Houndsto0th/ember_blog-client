import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('strong'),
  comments: DS.hasMany('comment'),
  posts: DS.hasMany('post')
});
