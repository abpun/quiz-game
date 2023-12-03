const controllers = require("../controllers/QuestionController");
const authUser = require("../middlewares/authUser")["authenticate"];

module.exports = (app) => {
  app.get(`/${process.env.APP_VERSION}/api/questions`, authUser, controllers.questions);
};
