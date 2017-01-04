import Ember from 'ember';

export default Ember.Route.extend({
    model({ duser_id }) {
        // const  user_id = param.user_id;
        return Ember.$.getJSON(`https://jsonplaceholder.typicode.com/users/${duser_id}`);
    },
});