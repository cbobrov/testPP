import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.$
                 .getJSON('https://jsonplaceholder.typicode.com/posts/')
                 .then( (allposts) => {
                    // let filteredPosts = allposts.filter((item, index) => index < 20);
                   return allposts.filter((item, index) => index < 20);
              //      return (filteredPosts); 
                    }); 
    }
});  


/*
function y(allposts) {
    return allposts.filter((x) => x > 2);
}


function x(a,b) {
    return a + b;
}

const x = function (a, b) {
    return a + b;
}

const x = (a, b) => {
    return a + b;
}

const x = (a, b) => a + b;

// -----
const x = (a, b) => {a +b}

const x = (a, b) => {
    a + b;
}

const x = function(a, b) {
    a+b;
}
*/