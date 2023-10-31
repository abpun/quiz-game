const mongoose = require("mongoose");

const highscoreSchema = mongoose.Schema({
    name: { type: String, required: true },
    level: { type: String, required: true },
    score: { type: Number, required: true },
});

const Highscore = mongoose.model("Highscore", highscoreSchema);
module.exports = Highscore;
