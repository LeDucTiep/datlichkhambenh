import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/ahihi", (req, res) => {
    return res.send("ahihi");
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
