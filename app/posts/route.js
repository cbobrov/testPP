import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.$.getJSON(`https://jsonplaceholder.typicode.com/posts/`);
                 .then( (allposts) => {
                  allposts.filter((item, ndex) => index < 21);
                  return allposts;
                 }),
    };
});
