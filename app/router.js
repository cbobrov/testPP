import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('dusers', function() {
    this.route('duser', { path: '/user/:duser_id' });
  });
  this.route('posts');
});

export default Router;
