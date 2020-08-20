import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  видРазрешения: DS.attr('i-i-s-r-s-3-t-вид-разрешения'),
  архив: DS.attr('boolean'),
  датаРазрешения: DS.attr('date'),
  номерРазрешения: DS.attr('number'),
  объектСтроит: DS.hasMany('i-i-s-r-s-3-объект-строит', { inverse: 'разрешение', async: false }),
  застройщОрг: DS.hasMany('i-i-s-r-s-3-застройщ-орг', { inverse: 'разрешение', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-r-s-3-разреш-на-строит.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видРазрешения: {
    descriptionKey: 'models.i-i-s-r-s-3-разреш-на-строит.validations.видРазрешения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  архив: {
    descriptionKey: 'models.i-i-s-r-s-3-разреш-на-строит.validations.архив.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРазрешения: {
    descriptionKey: 'models.i-i-s-r-s-3-разреш-на-строит.validations.датаРазрешения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерРазрешения: {
    descriptionKey: 'models.i-i-s-r-s-3-разреш-на-строит.validations.номерРазрешения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объектСтроит: {
    descriptionKey: 'models.i-i-s-r-s-3-разреш-на-строит.validations.объектСтроит.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  застройщОрг: {
    descriptionKey: 'models.i-i-s-r-s-3-разреш-на-строит.validations.застройщОрг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РазрешНаСтроитE', 'i-i-s-r-s-3-разреш-на-строит', {
    наименование: attr('Наименование', { index: 0 }),
    видРазрешения: attr('Вид разрешения', { index: 1 }),
    архив: attr('Архив', { index: 2 }),
    датаРазрешения: attr('Дата разрешения', { index: 3 }),
    номерРазрешения: attr('Номер разрешения', { index: 4 }),
    объектСтроит: hasMany('i-i-s-r-s-3-объект-строит', 'Объект строит', {
      наименование: attr('Наименование', { index: 0 }),
      адрес: attr('Адрес', { index: 1 })
    })
  });

  modelClass.defineProjection('РазрешНаСтроитL', 'i-i-s-r-s-3-разреш-на-строит', {
    наименование: attr('Наименование', { index: 0 }),
    видРазрешения: attr('Вид разрешения', { index: 1 }),
    архив: attr('Архив', { index: 2 }),
    датаРазрешения: attr('Дата разрешения', { index: 3 }),
    номерРазрешения: attr('Номер разрешения', { index: 4 })
  });
};
