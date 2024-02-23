const assert = require('assert');
const app = require('../../src/app');

describe('\'ecommerce\' service', () => {
  it('registered the service', () => {
    const service = app.service('ecommerce');

    assert.ok(service, 'Registered the service (ecommerce)');
  });
});
