const controllers = require("../controllers/QuestionController");

module.exports = (app) => {
    app.get(`/${process.env.APP_VERSION}/api/questions`, controllers.questions);
};
