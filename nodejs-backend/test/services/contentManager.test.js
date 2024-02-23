const assert = require('assert');
const app = require('../../src/app');

describe('\'contentManager\' service', () => {
  it('registered the service', () => {
    const service = app.service('contentManager');

    assert.ok(service, 'Registered the service (contentManager)');
  });
});
