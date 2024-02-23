const assert = require('assert');
const app = require('../../src/app');

describe('\'protection\' service', () => {
  it('registered the service', () => {
    const service = app.service('protection');

    assert.ok(service, 'Registered the service (protection)');
  });
});
