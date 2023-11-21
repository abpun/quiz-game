const Highscore = require("../models/Highscore");

exports.fetchAll = async (req, res) => {
    const { level = "Explorer 2" } = req.query;

    try {
        const highscores = await Highscore.aggregate([
            { $match: { level } },
            { $sort: { score: -1 } },
            { $limit: 10 },
        ]);
        res.json(highscores);
    } catch (error) {
        console.log(error);
    }
};

exports.addScore = async (req, res) => {
    const { name, level, score } = req.body;

    try {
        const newScore = new Highscore({ name, level, score });
        await newScore.save();
        res.json(`Score added`);
    } catch (error) {
        console.log(error);
    }
};
