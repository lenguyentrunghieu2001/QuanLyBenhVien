import express from "express";
import homecontroller, { aboutme } from "../controllers/homecontroller";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homecontroller.getHomePage);
  router.get("/about", homecontroller.aboutme);
  router.get("/HieuPST", (req, res) => {
    return res.send("Hello word with trung hieu (Hieu FST) Hieu FST");
  });
  return app.use("/", router);
};

module.exports = initWebRouter;
