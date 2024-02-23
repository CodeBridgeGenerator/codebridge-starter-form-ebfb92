const { Ecommerce } = require('./ecommerce.class');
const createModel = require('../../models/ecommerce.model');
const hooks = require('./ecommerce.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/ecommerce', new Ecommerce(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ecommerce');

  service.hooks(hooks);
};