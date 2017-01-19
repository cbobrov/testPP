import Ember from 'ember';

export default Ember.Controller.extend({
TitleID: undefined;
     actions: {
        getTitleID (id) {
            this.set (TitleID, id);
            
        }
    }  
});
