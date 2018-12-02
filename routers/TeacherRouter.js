const express = require("express");
const Router = express.Router();

Router.get("/teacher", (req, res) => {
    res.render("TeacherPage");
})

module.exports = Router;