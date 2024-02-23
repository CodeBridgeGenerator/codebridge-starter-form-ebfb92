const { Protection } = require('./protection.class');
const createModel = require('../../models/protection.model');
const hooks = require('./protection.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/protection', new Protection(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('protection');

  service.hooks(hooks);
};