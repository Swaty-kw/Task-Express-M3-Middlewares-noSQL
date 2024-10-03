const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notfoundHandler = require("./middlewareHandelr.js/notfoundHandler");
const dotenv = require("dotenv");
const conectDB = require("connectDB");
const errorsHandeler = require("./middlewareHandelr.js/errorsHandeler");
const connectDB = require("./database");
const morgan = require("morgan");
//middelware
connectDb();
app.use(express.json());
app.use("/posts", postsRoutes);
app.use(morgan("dev"));

app.use(cors());
// init
dotenv.config();
connectDB();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  console.log("Middleware");
  next();
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
model.exports = connectDB;
