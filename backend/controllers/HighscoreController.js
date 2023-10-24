const Highscore = require("../models/Highscore");

exports.fetchAll = async (req, res) => {
    try {
        const size = 5;
        const highscores = await Highscore.find()
            .sort({ score: -1 })
            .limit(size);
        res.json(highscores);
    } catch (error) {
        console.log(error);
    }
};

exports.addScore = async (req, res) => {
    const { name, score } = req.body;
    try {
        const newScore = new Highscore({
            name: name,
            score: score,
        });
        await newScore.save();
        res.json(`Score added`);
    } catch (error) {
        console.log(error);
    }
};
