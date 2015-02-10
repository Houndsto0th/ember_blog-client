import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('text'),
  user: DS.belongsTo('user'),
  post: DS.belongsTo('post')

});
