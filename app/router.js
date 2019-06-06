import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,

  rootURL: config.rootURL
});

Router.map(function () {
  this.route('news');

  this.route('loading');

  this.route('settings', {path: 'settings/:user_id'});

  this.route('status');
  this.route('archives');
});

export default Router;
