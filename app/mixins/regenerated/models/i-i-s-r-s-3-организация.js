import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  адрес: DS.attr('string'),
  иНН: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-r-s-3-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-r-s-3-организация.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-r-s-3-организация.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-r-s-3-организация', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    иНН: attr('ИНН', { index: 2 })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-r-s-3-организация', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    иНН: attr('ИНН', { index: 2 })
  });
};
