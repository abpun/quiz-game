module.exports = (app) => {
    require("./question")(app);
    require("./highscore")(app);
};
