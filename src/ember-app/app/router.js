import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba-kursacha-cотрудник-l');
  this.route('i-i-s-proba-kursacha-cотрудник-e',
  { path: 'i-i-s-proba-kursacha-cотрудник-e/:id' });
  this.route('i-i-s-proba-kursacha-cотрудник-e.new',
  { path: 'i-i-s-proba-kursacha-cотрудник-e/new' });
  this.route('i-i-s-proba-kursacha-гость-l');
  this.route('i-i-s-proba-kursacha-гость-e',
  { path: 'i-i-s-proba-kursacha-гость-e/:id' });
  this.route('i-i-s-proba-kursacha-гость-e.new',
  { path: 'i-i-s-proba-kursacha-гость-e/new' });
  this.route('i-i-s-proba-kursacha-должность-l');
  this.route('i-i-s-proba-kursacha-должность-e',
  { path: 'i-i-s-proba-kursacha-должность-e/:id' });
  this.route('i-i-s-proba-kursacha-должность-e.new',
  { path: 'i-i-s-proba-kursacha-должность-e/new' });
  this.route('i-i-s-proba-kursacha-карты-l');
  this.route('i-i-s-proba-kursacha-карты-e',
  { path: 'i-i-s-proba-kursacha-карты-e/:id' });
  this.route('i-i-s-proba-kursacha-карты-e.new',
  { path: 'i-i-s-proba-kursacha-карты-e/new' });
  this.route('i-i-s-proba-kursacha-форма-регис-вх-l');
  this.route('i-i-s-proba-kursacha-форма-регис-вх-e',
  { path: 'i-i-s-proba-kursacha-форма-регис-вх-e/:id' });
  this.route('i-i-s-proba-kursacha-форма-регис-вх-e.new',
  { path: 'i-i-s-proba-kursacha-форма-регис-вх-e/new' });
});

export default Router;
