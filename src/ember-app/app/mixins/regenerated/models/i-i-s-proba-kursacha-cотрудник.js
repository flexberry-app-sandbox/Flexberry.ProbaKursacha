import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРожд: DS.attr('date'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  серНомПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-proba-kursacha-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРожд: {
    descriptionKey: 'models.i-i-s-proba-kursacha-cотрудник.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-proba-kursacha-cотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-proba-kursacha-cотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серНомПаспорта: {
    descriptionKey: 'models.i-i-s-proba-kursacha-cотрудник.validations.серНомПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-proba-kursacha-cотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-proba-kursacha-cотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-proba-kursacha-cотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CотрудникE', 'i-i-s-proba-kursacha-cотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    датаРожд: attr('Дата рожд', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 5 }),
    должность: belongsTo('i-i-s-proba-kursacha-должность', 'Должность', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('CотрудникL', 'i-i-s-proba-kursacha-cотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    датаРожд: attr('Дата рожд', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 5 }),
    должность: belongsTo('i-i-s-proba-kursacha-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
