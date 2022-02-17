const { get } = require("express/lib/response");
const { restart } = require("nodemon");

let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

let aboutme = (req, res) => {
  return res.render("test/about.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  aboutme: aboutme,
};
