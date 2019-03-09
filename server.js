const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);

app.use(express.static("public"));
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3001);

app.get("/api/v1/visitor_tracker/visitors", (request, response) => {
  database("visitors")
    .select()
    .then(visitor => {
      response.status(200).json(visitor);
    });
});

app.listen(app.get("port"), () => {
  console.log(`visitor tracker is running on ${app.get("port")}.`);
});

module.exports = app;
