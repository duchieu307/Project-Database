const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createintitution", (req, res) => {
    res.render("CreateIntitution")
})

Router.post("/createintitution", (req, res) => {
    let InName = req.body.InName;
    let InID = req.body.InID;
    let InOffice = req.body.InOffice;
    let InEmail = req.body.InEmail;
    let InPhone = req.body.InPhone;
    FileController.createIntitution(InName, InID, InOffice, InEmail, InPhone)
})
module.exports = Router