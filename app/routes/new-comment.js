import Ember from 'ember';
import Moment from 'moment';

export default Ember.Route.extend({
  saveComment() {
    var params = {
      comment: this.get('comment'),
      name: this.get('name'),
      date: moment().format('LL')
    };
    this.sendAction('saveComment', params);
  }
});
