const controllers = require("../controllers/HighscoreController");

module.exports = (app) => {
    app.get(`/${process.env.APP_VERSION}/api/highscores`, controllers.fetchAll);
    app.post(`/${process.env.APP_VERSION}/api/highscore`, controllers.addScore);
};
