import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISRS_3ОрганизацияLForm from './forms/i-i-s-r-s-3-организация-l';
import IISRS_3РазрешНаСтроитLForm from './forms/i-i-s-r-s-3-разреш-на-строит-l';
import IISRS_3ОрганизацияEForm from './forms/i-i-s-r-s-3-организация-e';
import IISRS_3РазрешНаСтроитEForm from './forms/i-i-s-r-s-3-разреш-на-строит-e';
import IISRS_3ЗастройщОргModel from './models/i-i-s-r-s-3-застройщ-орг';
import IISRS_3ОбъектСтроитModel from './models/i-i-s-r-s-3-объект-строит';
import IISRS_3ОрганизацияModel from './models/i-i-s-r-s-3-организация';
import IISRS_3РазрешНаСтроитModel from './models/i-i-s-r-s-3-разреш-на-строит';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-r-s-3-застройщ-орг': IISRS_3ЗастройщОргModel,
    'i-i-s-r-s-3-объект-строит': IISRS_3ОбъектСтроитModel,
    'i-i-s-r-s-3-организация': IISRS_3ОрганизацияModel,
    'i-i-s-r-s-3-разреш-на-строит': IISRS_3РазрешНаСтроитModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
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
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
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
        'r-s-3': {
          caption: 'r-s-3',
          title: 'r-s-3',
          'i-i-s-r-s-3-разреш-на-строит-l': {
            caption: 'i-i-s-r-s-3-разреш-на-строит-l',
            title: 'i-i-s-r-s-3-разреш-на-строит-l'
          },
          'i-i-s-r-s-3-организация-l': {
            caption: 'i-i-s-r-s-3-организация-l',
            title: 'i-i-s-r-s-3-организация-l'
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
    'i-i-s-r-s-3-организация-l': IISRS_3ОрганизацияLForm,
    'i-i-s-r-s-3-разреш-на-строит-l': IISRS_3РазрешНаСтроитLForm,
    'i-i-s-r-s-3-организация-e': IISRS_3ОрганизацияEForm,
    'i-i-s-r-s-3-разреш-на-строит-e': IISRS_3РазрешНаСтроитEForm
  },

});

export default translations;
