const { UserAccounts } = require('./userAccounts.class');
const createModel = require('../../models/userAccounts.model');
const hooks = require('./userAccounts.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/userAccounts', new UserAccounts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('userAccounts');

  service.hooks(hooks);
};