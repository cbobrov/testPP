import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    // body: false,

 actions: {
        setBodyView (bodyView) {
          //  debugger;
           
   this.set('body', !bodyView);
              
            
        }
    }  
});
