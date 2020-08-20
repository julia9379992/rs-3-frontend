import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-r-s-3-организация-l');
  this.route('i-i-s-r-s-3-организация-e',
  { path: 'i-i-s-r-s-3-организация-e/:id' });
  this.route('i-i-s-r-s-3-организация-e.new',
  { path: 'i-i-s-r-s-3-организация-e/new' });
  this.route('i-i-s-r-s-3-разреш-на-строит-l');
  this.route('i-i-s-r-s-3-разреш-на-строит-e',
  { path: 'i-i-s-r-s-3-разреш-на-строит-e/:id' });
  this.route('i-i-s-r-s-3-разреш-на-строит-e.new',
  { path: 'i-i-s-r-s-3-разреш-на-строит-e/new' });
});

export default Router;
