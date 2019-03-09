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

app.post("/api/v1/visitor_tracker/new_visitor", (request, response) => {
  const newVisitor = request.body;

  database("visitors")
    .insert({ ...newVisitor }, "id")
    .then(project => {
      response.status(201).json("new visitor successfully added!");
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});

app.listen(app.get("port"), () => {
  console.log(`visitor tracker is running on ${app.get("port")}.`);
});

module.exports = app;
