const express = require("express");
const routes = express.Router();

const views = __dirname + "/views/";

const profile = {
  name: "Luciane",
  avatar: "https://avatars.githubusercontent.com/u/52360898?v=4",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
};

routes.get("/", (request, response) => response.render(views + "index"));
routes.get("/job", (request, response) => response.render(views + "job"));
routes.get("/job/edit", (request, response) => response.render(views + "job-edit"));
routes.get("/profile", (request, response) => response.render(views + "profile", { profile }));

module.exports = routes;
