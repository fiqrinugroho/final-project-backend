// karena menggunakan .env variable
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("../config/routes/index");
// error handler
const errorHandler = require("../middlewares/errorHandler");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
// inisialisasi setelah import statement
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));
// basic express configurasi
app.locals.moment = require("moment");
// Middleware to Parse JSON
app.use(cors());
app.use(express.json());
app.use(router);

// middleware for page not found
app.use((req, res, next) => {
  next(
    new ApiError(
      httpStatus.NOT_FOUND,
      `Cannot Find EndPoint ${req.originalUrl} On This App ....`
    )
  );
});
// use middleware errorHandler
app.use(errorHandler);

module.exports = app;
