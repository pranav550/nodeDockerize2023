const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome To Docker Nodejs test12" });
});

app.listen(port, () => {
  console.log(`server listen on port ${port}`);
});
