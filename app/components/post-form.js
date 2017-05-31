import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        image: this.get('image'),
        created: moment().format('LL')
      };
      this.sendAction('savePost', params);
    }
  }
});
