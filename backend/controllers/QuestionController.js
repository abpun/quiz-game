const Question = require("../models/Question");

exports.questions = async (req, res) => {
  const { level = "Explorer 2", totalQuestions = "5" } = req.query;

  try {
    const randomQuestions = await Question.aggregate([
      { $match: { level: level } },
      { $sample: { size: Number(totalQuestions) } },
    ]);
    res.json(randomQuestions);
  } catch (error) {
    console.log(error);
  }
};
