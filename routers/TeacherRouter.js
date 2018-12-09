const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController")

Router.get("/:id/teacher", (req, res) => {
    let TeID = req.params.id
    FileController.findTeacherByID(TeID, (err, docs) => {
        let Arr = docs
        console.log(Arr)
        res.render("TeacherPage");
    })

})

module.exports = Router;