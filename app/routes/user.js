import Ember from 'ember';

export default Ember.Route.extend({
  mode: function (params) {
    return this.store.find('user', params.user_id);
  },
  afterModel: function (model) {
    model.reload();
  }
});
