const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/AnujDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

app.use("/api", User);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
