import Ember from 'ember';

export default Ember.Controller.extend({
    mtype: 'navbar-fixed-top',
    actions: {
        setMtype (mtype) {
            this.set ('mtype', mtype);
        }
    }  
});
