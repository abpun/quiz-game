const Highscore = require("../models/Highscore");
const User = require("../models/Users");

exports.fetchAll = async (req, res) => {
  const { level = "Explorer 2" } = req.query;
  try {
    const highscores = await Highscore.aggregate([
      { $match: { level } },
      { $sort: { score: -1 } },
      { $limit: 10 },
    ]);

    const userIds = highscores.map((score) => score.user);
    const users = await User.find({ _id: { $in: userIds } }).select("-password -level");

    const populatedHighscores = highscores.map((score) => {
      const user = users.find((u) => u._id.equals(score.user));
      return { ...score, user };
    });

    res.json(populatedHighscores);
  } catch (error) {
    console.log(error);
  }
};

exports.addScore = async (req, res) => {
  const { username, level, score } = req.body;

  try {
    const highscore = await Highscore.findOne({ user: req.user._id });

    if (!highscore) {
      const newScore = new Highscore({ user: req.user._id, level, score });
      await newScore.save();
      res.status(201).json({ message: `Score added` });
    }

    const isHigh = score > highscore.score;

    if (isHigh) {
      await Highscore.findOneAndUpdate(
        { user: req.user._id, level: level },
        { score: score },
        { upsert: true }
      );
      return res.status(200).json({ message: `New highscore added` });
    }
    res.status(200).json({ message: "Highscore added" });
  } catch (error) {
    console.log(error);
  }
};
