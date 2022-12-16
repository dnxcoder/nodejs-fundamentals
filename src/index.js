const express = require("express");

const app = express();

console.log("fala uberaba");

//adding a midware for express use json
app.use(express.json());

app.get("/ignite", (request, response) => {
  response.json("MACACO LOCASSO");
});

//tipos de parametros

// Route params => Identify one recurse to edit/search/delete
// Query params => Pagination/ Filter
// Body params => Insertion/Update of data (json)

app.get("/courses", (request, response) => {
  const { query } = request;

  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.post("/courses", (request, response) => {
  console.log(request.body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  console.log(request.params);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4 "]);
});

app.listen(3333);
