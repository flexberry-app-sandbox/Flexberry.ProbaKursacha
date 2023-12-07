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
    cотрудник: belongsTo('i-i-s-proba-kursacha-cотрудник', 'Cотрудник', {
      фамилия: attr('Фамилия', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фамилия' }),
    карты: belongsTo('i-i-s-proba-kursacha-карты', 'Карты', {
      кодКарты: attr('Код карты', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'кодКарты' }),
    должность: belongsTo('i-i-s-proba-kursacha-должность', 'Должность', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    гость: belongsTo('i-i-s-proba-kursacha-гость', 'Гость', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' })
  });
};
