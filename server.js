const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", [process.env.APP_URL, process.env.LOCAL_URL]);

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

app.use(
    cors({
        origin: [process.env.APP_URL, process.env.LOCAL_URL],
        credentials: true,
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/index")(app);

app.get("/", (req, res, next) => {
    res.status(200).json({ message: "ok" });
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running");
});
