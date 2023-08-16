const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome To Docker" });
});

app.listen(port, () => {
  console.log(`server listen on port ${port}`);
});
