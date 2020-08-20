import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  адрес: DS.attr('string'),
  разрешение: DS.belongsTo('i-i-s-r-s-3-разреш-на-строит', { inverse: 'объектСтроит', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-r-s-3-объект-строит.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-r-s-3-объект-строит.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  разрешение: {
    descriptionKey: 'models.i-i-s-r-s-3-объект-строит.validations.разрешение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОбъектСтроитE', 'i-i-s-r-s-3-объект-строит', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
