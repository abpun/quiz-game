const Question = require("../models/Question");

exports.questions = async (req, res) => {
    try {
        const allQuestion = await Question.find();
        res.json(allQuestion);
    } catch (error) {
        console.log(error);
    }
};
