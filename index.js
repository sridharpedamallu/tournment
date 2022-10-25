const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;
const app = express();
const db = mongoose.connection;
const dotenv = require("dotenv");

const user_routes = require("./routes/user.routes");
const player_routes = require("./routes/player.routes");
const teams_routes = require("./routes/team.routes");
const draws_routes = require("./routes/draw.routes");

dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", user_routes);
app.use("/api/players", player_routes);
app.use("/api/teams", teams_routes);
app.use("/api/draws", draws_routes);

app.use("/", (req, res) => {
    res.send('Tournment backend app!!')
})

async function connect() {
    await mongoose.connect("mongodb+srv://dbuser:password!123@cluster0.odijz.mongodb.net/tournment?retryWrites=true&w=majority");
    // await mongoose.connect("mongodb://localhost:27017/tournment");
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
    app.listen(process.env.PORT || 3001, "0.0.0.0", () => {
        console.log(`App running at http://localhost:${port}`);
    });
}

connect();