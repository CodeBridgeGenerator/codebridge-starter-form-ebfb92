const users = require("./users/users.service.js");
const userAccounts = require("./userAccounts/userAccounts.service.js");
const contentManager = require("./contentManager/contentManager.service.js");
const ecommerce = require("./ecommerce/ecommerce.service.js");
const internationalization = require("./internationalization/internationalization.service.js");
const usage = require("./usage/usage.service.js");
const projectManagement = require("./projectManagement/projectManagement.service.js");
const hosting = require("./hosting/hosting.service.js");
const protection = require("./protection/protection.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(userAccounts);
  app.configure(contentManager);
  app.configure(ecommerce);
  app.configure(internationalization);
  app.configure(usage);
  app.configure(projectManagement);
  app.configure(hosting);
  app.configure(protection);
    // ~cb-add-configure-service-name~
};
