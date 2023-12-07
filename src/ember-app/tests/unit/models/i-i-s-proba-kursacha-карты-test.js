import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba-kursacha-карты', 'Unit | Model | i-i-s-proba-kursacha-карты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba-kursacha-cотрудник',
    'model:i-i-s-proba-kursacha-гость',
    'model:i-i-s-proba-kursacha-должность',
    'model:i-i-s-proba-kursacha-карты',
    'model:i-i-s-proba-kursacha-тч-регист-входа',
    'model:i-i-s-proba-kursacha-форма-регис-вх',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
