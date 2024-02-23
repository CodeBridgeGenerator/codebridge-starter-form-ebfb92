const { ContentManager } = require('./contentManager.class');
const createModel = require('../../models/contentManager.model');
const hooks = require('./contentManager.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/contentManager', new ContentManager(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('contentManager');

  service.hooks(hooks);
};