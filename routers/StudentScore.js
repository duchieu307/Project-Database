const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/:id/info/score", (req, res) => {
    let StuID = req.params.id
    FileController.findStudentByID(StuID, (err, docs) => {
        let Stu_id = docs[0]._id
        console.log(Stu_id)
        FileController.findStudentScore(Stu_id, (err, data) => {
            let Arr = data
            let listElem = Arr.map((item, index) => `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>
                    <a href="">${item.SubName}</a>
                </td>
                <td>
                    <a href="">${item.Mid_termScore}</a>
                </td>
                <td>
                    <a href="">${item.Final_termScore}</a>
                </td>
                <td>
                    <a href="">${item.AverageScore}</a>
                </td>
                               
             </tr>
            `)

            res.render("StudentScore", {
                Data: listElem
            })
        })

    })

})

module.exports = Router