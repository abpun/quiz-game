const mongoose = require("mongoose");

const highscoreSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  level: { type: String, required: true },
  score: { type: Number, required: true },
});

const Highscore = mongoose.model("Highscore", highscoreSchema);
module.exports = Highscore;
