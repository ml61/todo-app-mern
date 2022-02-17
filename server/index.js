const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/config");
const authRouter = require("./routes/authRouter/authRouter");
const { categoryRouter } = require("./routes/categoryRouter/categoryRouter");
const { todoRouter } = require("./routes/todoRouter/todoRouter");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/todos", todoRouter);

async function start() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server error: ", e.errorsArr.join(" / "));
    process.exit(1);
  }
}

start();
