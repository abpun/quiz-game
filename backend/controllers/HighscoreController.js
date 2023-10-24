const Highscore = require("../models/Highscore");

exports.fetchAll = async (req, res) => {
    try {
        const sampleSize = 5;
        const highscores = await Highscore.aggregate([
            { $sample: { size: sampleSize } },
        ]);
        res.json(highscores);
    } catch (error) {
        console.log(error);
    }
};

exports.addScore = async (req, res) => {
    const { name, score } = req.body;
    try {
        const newScore = new Model({
            name: name,
            score: score,
        });
        await newScore.save();
        res.json(`Score added`);
    } catch (error) {
        console.log(error);
    }
};
