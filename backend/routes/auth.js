const controllers = require("../controllers/AuthController");

module.exports = (app) => {
  app.post(`/${process.env.APP_VERSION}/api/register`, controllers.register);
  app.post(`/${process.env.APP_VERSION}/api/login`, controllers.login);
};
