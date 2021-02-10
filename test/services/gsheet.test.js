const assert = require('assert');
const app = require('../../src/app');

describe('\'gsheet\' service', () => {
  it('registered the service', () => {
    const service = app.service('gsheet');

    assert.ok(service, 'Registered the service');
  });
});
