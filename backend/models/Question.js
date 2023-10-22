const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    question: { type: String, required: true },
    correct_answer: { type: String, required: true },
    incorrect_answers: { type: Array, required: true },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
