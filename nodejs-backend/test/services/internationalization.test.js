const assert = require('assert');
const app = require('../../src/app');

describe('\'internationalization\' service', () => {
  it('registered the service', () => {
    const service = app.service('internationalization');

    assert.ok(service, 'Registered the service (internationalization)');
  });
});
