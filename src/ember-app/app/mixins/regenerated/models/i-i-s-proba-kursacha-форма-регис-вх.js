import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тчРегистВхода: DS.hasMany('i-i-s-proba-kursacha-тч-регист-входа', { inverse: 'формаРегисВх', async: false })
});

export let ValidationRules = {
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
    })
  });

  modelClass.defineProjection('ФормаРегисВхL', 'i-i-s-proba-kursacha-форма-регис-вх', {
    
  });
};
