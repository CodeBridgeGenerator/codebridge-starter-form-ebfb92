const { ProjectManagement } = require('./projectManagement.class');
const createModel = require('../../models/projectManagement.model');
const hooks = require('./projectManagement.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/projectManagement', new ProjectManagement(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('projectManagement');

  service.hooks(hooks);
};