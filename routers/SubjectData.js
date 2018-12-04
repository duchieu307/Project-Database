const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/subject/:id", (req, res) => {
    let SubID = req.params.id;
    FileController.getSubjectData(SubID, (err, docs) => {
        if (err) console.log(err)
        let Arr = docs
        res.send(Arr)
    })

})

module.exports = Router