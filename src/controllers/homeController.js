import db from "../models/index";
import CRUDservice from "../services/CRUDservice";

let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDservice.createNewUser(req.body);
  return res.send(message);
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDservice.getAllUsers();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
};
