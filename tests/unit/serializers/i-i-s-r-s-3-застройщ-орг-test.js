import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-r-s-3-застройщ-орг', 'Unit | Serializer | i-i-s-r-s-3-застройщ-орг', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-r-s-3-застройщ-орг',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-r-s-3-t-вид-разрешения',

    'model:i-i-s-r-s-3-застройщ-орг',
    'model:i-i-s-r-s-3-объект-строит',
    'model:i-i-s-r-s-3-организация',
    'model:i-i-s-r-s-3-разреш-на-строит',
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
