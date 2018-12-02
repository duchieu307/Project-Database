const express = require("express");
const Router = express.Router();

Router.get("/student", (req, res) => {
    res.render("Studentpage");
});

module.exports = Router;


//hien thi thong tin hoc sinh