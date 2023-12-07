import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКарты: DS.attr('number')
});

export let ValidationRules = {
  кодКарты: {
    descriptionKey: 'models.i-i-s-proba-kursacha-карты.validations.кодКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартыE', 'i-i-s-proba-kursacha-карты', {
    кодКарты: attr('Код карты', { index: 0 })
  });

  modelClass.defineProjection('КартыL', 'i-i-s-proba-kursacha-карты', {
    кодКарты: attr('Код карты', { index: 0 })
  });
};
