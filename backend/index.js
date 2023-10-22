require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

const app = express();

const corsOptions = {
    origin: "*", // Allow requests from any domain
    // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the HTTP methods you want to support
    // allowedHeaders: ['Content-Type', 'Authorization'], // Define the headers you want to allow
};

app.use(cors(corsOptions));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

require("./models");
require("./routes")(app);

app.get("/", (req, res) => {
    res.json({ message: "hello" });
});

app.listen(5000, () => {
    console.log("Listening");
});
