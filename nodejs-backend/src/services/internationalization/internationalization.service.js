const { Internationalization } = require('./internationalization.class');
const createModel = require('../../models/internationalization.model');
const hooks = require('./internationalization.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/internationalization', new Internationalization(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('internationalization');

  service.hooks(hooks);
};