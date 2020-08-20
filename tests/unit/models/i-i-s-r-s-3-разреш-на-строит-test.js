import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-r-s-3-разреш-на-строит', 'Unit | Model | i-i-s-r-s-3-разреш-на-строит', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
