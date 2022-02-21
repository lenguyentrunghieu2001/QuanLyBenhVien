import express from "express";
import homecontroller, { aboutme } from "../controllers/homecontroller";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homecontroller.getHomePage);
  router.get("/about", homecontroller.aboutme);
  router.get("/crud", homecontroller.getCRUD);

  router.post("/post-crud", homecontroller.postCRUD);

  return app.use("/", router);
};

module.exports = initWebRouter;
