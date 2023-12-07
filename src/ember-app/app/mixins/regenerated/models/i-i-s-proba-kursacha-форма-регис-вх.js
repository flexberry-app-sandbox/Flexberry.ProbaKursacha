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
    тчРегистВхода: hasMany('i-i-s-proba-kursacha-тч-регист-входа', 'Тч регист входа', {
      должность: belongsTo('i-i-s-proba-kursacha-должность', 'Наименование', {
        наименование: attr('Наименование', { index: 0, hidden: true })
      }, { index: -1, hidden: true }),
      cотрудник: belongsTo('i-i-s-proba-kursacha-cотрудник', 'Фамилия', {
        фамилия: attr('Фамилия', { index: 1, hidden: true }),
        имя: attr('Имя', { index: 2 }),
        отчество: attr('Отчество', { index: 3 })
      }, { index: -1, hidden: true }),
      карты: belongsTo('i-i-s-proba-kursacha-карты', 'Код карты', {
        кодКарты: attr('Код карты', { index: 4, hidden: true })
      }, { index: -1, hidden: true }),
      гость: belongsTo('i-i-s-proba-kursacha-гость', 'Фамилия', {
        фамилия: attr('Фамилия', { index: 5, hidden: true }),
        имя: attr('Имя', { index: 6 }),
        отчество: attr('Отчество', { index: 7 })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('ФормаРегисВхL', 'i-i-s-proba-kursacha-форма-регис-вх', {
    дата: attr('Дата', { index: 0 })
  });
};
