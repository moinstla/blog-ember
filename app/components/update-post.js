import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        image: this.get('image'),
        created: moment().format('LL')
      };
      this.sendAction('update', post, params);
    },
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
