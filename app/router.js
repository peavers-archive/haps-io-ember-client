import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('news', function () {});

  this.route('users', function () {
    this.route('edit', {path: '/edit/:user_id'});
  });
  this.route('loading');
});

export default Router;
