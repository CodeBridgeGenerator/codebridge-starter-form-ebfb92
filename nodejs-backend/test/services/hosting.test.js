const assert = require('assert');
const app = require('../../src/app');

describe('\'hosting\' service', () => {
  it('registered the service', () => {
    const service = app.service('hosting');

    assert.ok(service, 'Registered the service (hosting)');
  });
});
