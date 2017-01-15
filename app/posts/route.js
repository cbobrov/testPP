import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.$.when(
            Ember.$.getJSON('https://jsonplaceholder.typicode.com/posts/'),
            Ember.$.getJSON('https://jsonplaceholder.typicode.com/users')
            )
            .then( ([allposts], [allusers]) => {
                allusers = Ember.A(allusers);//????
                allposts.forEach((ppp) => ppp.uuu = allusers.findBy('id', ppp.userId))
                return allposts;  
            })            
                   
            .then( (allposts) => {
                   return allposts.filter((item, index) => index < 20);

            }); 
    }
});  

/*
allposts.forEach((ppp) => ppp.uuu = allusers.findBy('id', ppp.userId))
// ------
allposts.forEach(function(ppp) {
    return ppp.uuu = allusers.findBy('id', ppp.userId);
})

// ---
var user = allusers.findBy('id', ppp.userId);


// {
//     id: 23,
//     title: "Some title",
//     text: "Some text here",
//     userId: 1,

//     uuu: {
//         id: 1,
//         name: 'Some User name',
//         email: 'mail@user.com'
//     }
// }

// post.uuu.email


return ppp.uuu = user;
*/


  // let filteredPosts = allposts.filter((item, index) => index < 20);
  //return (filteredPosts); 

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