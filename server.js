const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

var quotes = require("./routes/quotes");

// create a GET route

app.use("/get_quote", quotes);
app.get("/", (req, res) => {
  res.send({ express: "Your Express Backend is connected to React" });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
