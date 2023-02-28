const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://127.0.0.1:27017/managerAPI";

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Successfylly Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", require("./Routes/routes"));
app.get("/hello", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Contact Manager API is working Now",
  });
});
app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
