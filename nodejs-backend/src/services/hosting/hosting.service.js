const { Hosting } = require('./hosting.class');
const createModel = require('../../models/hosting.model');
const hooks = require('./hosting.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/hosting', new Hosting(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hosting');

  service.hooks(hooks);
};