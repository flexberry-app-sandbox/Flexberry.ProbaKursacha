import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  тчРегистВхода: DS.hasMany('i-i-s-proba-kursacha-тч-регист-входа', { inverse: 'формаРегисВх', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proba-kursacha-форма-регис-вх.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тчРегистВхода: {
    descriptionKey: 'models.i-i-s-proba-kursacha-форма-регис-вх.validations.тчРегистВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаРегисВхE', 'i-i-s-proba-kursacha-форма-регис-вх', {
    дата: attr('Дата', { index: 0 }),
    тчРегистВхода: hasMany('i-i-s-proba-kursacha-тч-регист-входа', 'Тч регист входа', {
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
    })
  });

  modelClass.defineProjection('ФормаРегисВхL', 'i-i-s-proba-kursacha-форма-регис-вх', {
    
  });
};
