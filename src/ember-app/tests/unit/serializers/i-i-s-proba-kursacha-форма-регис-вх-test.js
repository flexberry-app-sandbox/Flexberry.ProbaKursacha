import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba-kursacha-форма-регис-вх', 'Unit | Serializer | i-i-s-proba-kursacha-форма-регис-вх', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba-kursacha-форма-регис-вх',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
