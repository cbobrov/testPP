import Ember from 'ember';
 
export default Ember.Route.extend({
  model() {
        return Ember.$.getJSON('https://jsonplaceholder.typicode.com/users');
    }
    
}); 


