const Question = require("../models/Question");

exports.questions = async (req, res) => {
    try {
        const sampleSize = 5;
        const randomQuestions = await Question.aggregate([
            { $sample: { size: sampleSize } },
        ]);
        res.json(randomQuestions);
    } catch (error) {
        console.log(error);
    }
};
