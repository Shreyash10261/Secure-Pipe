const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("SecurePipe CI/CD Pipeline Running Successfully");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
