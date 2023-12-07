import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРожд: DS.attr('date'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  почта: DS.attr('string'),
  серНомПаспор: DS.attr('number'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  датаРожд: {
    descriptionKey: 'models.i-i-s-proba-kursacha-гость.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-proba-kursacha-гость.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-proba-kursacha-гость.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-proba-kursacha-гость.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серНомПаспор: {
    descriptionKey: 'models.i-i-s-proba-kursacha-гость.validations.серНомПаспор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-proba-kursacha-гость.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-proba-kursacha-гость.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостьE', 'i-i-s-proba-kursacha-гость', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    датаРожд: attr('Дата рожд', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    серНомПаспор: attr('Сер ном паспор', { index: 5 }),
    почта: attr('Почта', { index: 6 })
  });

  modelClass.defineProjection('ГостьL', 'i-i-s-proba-kursacha-гость', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    датаРожд: attr('Дата рожд', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    серНомПаспор: attr('Сер ном паспор', { index: 5 }),
    почта: attr('Почта', { index: 6 })
  });
};
