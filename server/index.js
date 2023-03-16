require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const verifyJWT = require("./middleware/verifyJWT");

const PORT = 5000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json()); // req.body
app.use(cookieParser());
app.set("trust proxy", 1);

// ROUTES

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
