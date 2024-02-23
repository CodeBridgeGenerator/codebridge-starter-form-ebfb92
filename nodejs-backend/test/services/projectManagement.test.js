const assert = require('assert');
const app = require('../../src/app');

describe('\'projectManagement\' service', () => {
  it('registered the service', () => {
    const service = app.service('projectManagement');

    assert.ok(service, 'Registered the service (projectManagement)');
  });
});
