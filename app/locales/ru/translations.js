import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'R s_3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'R s_3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'R s_3',
          title: 'R s_3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'r-s-3': {
          caption: 'RS_3',
          title: 'RS_3',
          'i-i-s-r-s-3-разреш-на-строит-l': {
            caption: 'Разреш на строит',
            title: ''
          },
          'i-i-s-r-s-3-организация-l': {
            caption: 'Организация',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-r-s-3-организация-l': IISRS_3ОрганизацияLForm,
    'i-i-s-r-s-3-разреш-на-строит-l': IISRS_3РазрешНаСтроитLForm,
    'i-i-s-r-s-3-организация-e': IISRS_3ОрганизацияEForm,
    'i-i-s-r-s-3-разреш-на-строит-e': IISRS_3РазрешНаСтроитEForm
  },

});

export default translations;
