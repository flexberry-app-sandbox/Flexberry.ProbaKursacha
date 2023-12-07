import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  cотрудник: DS.belongsTo('i-i-s-proba-kursacha-cотрудник', { inverse: null, async: false }),
  гость: DS.belongsTo('i-i-s-proba-kursacha-гость', { inverse: null, async: false }),
  должность: DS.belongsTo('i-i-s-proba-kursacha-должность', { inverse: null, async: false }),
  карты: DS.belongsTo('i-i-s-proba-kursacha-карты', { inverse: null, async: false }),
  формаРегисВх: DS.belongsTo('i-i-s-proba-kursacha-форма-регис-вх', { inverse: 'тчРегистВхода', async: false })
});

export let ValidationRules = {
  cотрудник: {
    descriptionKey: 'models.i-i-s-proba-kursacha-тч-регист-входа.validations.cотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  гость: {
    descriptionKey: 'models.i-i-s-proba-kursacha-тч-регист-входа.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-proba-kursacha-тч-регист-входа.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-proba-kursacha-тч-регист-входа.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаРегисВх: {
    descriptionKey: 'models.i-i-s-proba-kursacha-тч-регист-входа.validations.формаРегисВх.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчРегистВходаE', 'i-i-s-proba-kursacha-тч-регист-входа', {
    гость: belongsTo('i-i-s-proba-kursacha-гость', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3, hidden: true }),
      имя: attr('Имя', { index: 4 }),
      отчество: attr('Отчество', { index: 5 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-proba-kursacha-должность', 'Должность', {

    }, { index: 0 }),
    cотрудник: belongsTo('i-i-s-proba-kursacha-cотрудник', 'Сотрудник', {

    }, { index: 1 }),
    карты: belongsTo('i-i-s-proba-kursacha-карты', 'Карта', {

    }, { index: 2 })
  });
};
