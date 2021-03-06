const { get } = require("express/lib/response");
const { restart } = require("nodemon");
import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("-----------------------------");
    console.log(data);
    console.log("-----------------------------");
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let aboutme = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

module.exports = {
  getHomePage: getHomePage,
  aboutme: aboutme,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
