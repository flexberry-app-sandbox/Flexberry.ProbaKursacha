import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbaKursachaCотрудникLForm from './forms/i-i-s-proba-kursacha-cотрудник-l';
import IISProbaKursachaГостьLForm from './forms/i-i-s-proba-kursacha-гость-l';
import IISProbaKursachaДолжностьLForm from './forms/i-i-s-proba-kursacha-должность-l';
import IISProbaKursachaКартыLForm from './forms/i-i-s-proba-kursacha-карты-l';
import IISProbaKursachaФормаРегисВхLForm from './forms/i-i-s-proba-kursacha-форма-регис-вх-l';
import IISProbaKursachaCотрудникEForm from './forms/i-i-s-proba-kursacha-cотрудник-e';
import IISProbaKursachaГостьEForm from './forms/i-i-s-proba-kursacha-гость-e';
import IISProbaKursachaДолжностьEForm from './forms/i-i-s-proba-kursacha-должность-e';
import IISProbaKursachaКартыEForm from './forms/i-i-s-proba-kursacha-карты-e';
import IISProbaKursachaФормаРегисВхEForm from './forms/i-i-s-proba-kursacha-форма-регис-вх-e';
import IISProbaKursachaCотрудникModel from './models/i-i-s-proba-kursacha-cотрудник';
import IISProbaKursachaГостьModel from './models/i-i-s-proba-kursacha-гость';
import IISProbaKursachaДолжностьModel from './models/i-i-s-proba-kursacha-должность';
import IISProbaKursachaКартыModel from './models/i-i-s-proba-kursacha-карты';
import IISProbaKursachaТчРегистВходаModel from './models/i-i-s-proba-kursacha-тч-регист-входа';
import IISProbaKursachaФормаРегисВхModel from './models/i-i-s-proba-kursacha-форма-регис-вх';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba-kursacha-cотрудник': IISProbaKursachaCотрудникModel,
    'i-i-s-proba-kursacha-гость': IISProbaKursachaГостьModel,
    'i-i-s-proba-kursacha-должность': IISProbaKursachaДолжностьModel,
    'i-i-s-proba-kursacha-карты': IISProbaKursachaКартыModel,
    'i-i-s-proba-kursacha-тч-регист-входа': IISProbaKursachaТчРегистВходаModel,
    'i-i-s-proba-kursacha-форма-регис-вх': IISProbaKursachaФормаРегисВхModel
  },

  'application-name': 'Proba kursacha',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba kursacha',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba kursacha',
          title: 'Proba kursacha'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'proba-kursacha': {
          caption: 'ProbaKursacha',
          title: 'ProbaKursacha',
          'i-i-s-proba-kursacha-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-proba-kursacha-карты-l': {
            caption: 'Карты',
            title: ''
          },
          'i-i-s-proba-kursacha-cотрудник-l': {
            caption: 'Cотрудник',
            title: ''
          },
          'i-i-s-proba-kursacha-гость-l': {
            caption: 'Гость',
            title: ''
          },
          'i-i-s-proba-kursacha-форма-регис-вх-l': {
            caption: 'Форма регис вх',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba-kursacha-cотрудник-l': IISProbaKursachaCотрудникLForm,
    'i-i-s-proba-kursacha-гость-l': IISProbaKursachaГостьLForm,
    'i-i-s-proba-kursacha-должность-l': IISProbaKursachaДолжностьLForm,
    'i-i-s-proba-kursacha-карты-l': IISProbaKursachaКартыLForm,
    'i-i-s-proba-kursacha-форма-регис-вх-l': IISProbaKursachaФормаРегисВхLForm,
    'i-i-s-proba-kursacha-cотрудник-e': IISProbaKursachaCотрудникEForm,
    'i-i-s-proba-kursacha-гость-e': IISProbaKursachaГостьEForm,
    'i-i-s-proba-kursacha-должность-e': IISProbaKursachaДолжностьEForm,
    'i-i-s-proba-kursacha-карты-e': IISProbaKursachaКартыEForm,
    'i-i-s-proba-kursacha-форма-регис-вх-e': IISProbaKursachaФормаРегисВхEForm
  },

});

export default translations;
