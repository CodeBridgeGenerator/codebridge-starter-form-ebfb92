const assert = require('assert');
const app = require('../../src/app');

describe('\'userAccounts\' service', () => {
  it('registered the service', () => {
    const service = app.service('userAccounts');

    assert.ok(service, 'Registered the service (userAccounts)');
  });
});
