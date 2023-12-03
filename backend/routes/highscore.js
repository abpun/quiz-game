const controllers = require("../controllers/HighscoreController");
const authUser = require("../middlewares/authUser")["authenticate"];

module.exports = (app) => {
  app.get(`/${process.env.APP_VERSION}/api/highscores`, authUser, controllers.fetchAll);
  app.post(`/${process.env.APP_VERSION}/api/highscore`, authUser, controllers.addScore);
};
