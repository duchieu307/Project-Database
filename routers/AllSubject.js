const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/allsubject", (req, res) => {
    FileController.findAllSubject((err, docs) => {
        let Arr = docs
        let listElem = Arr.map((item, index) => `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>
                        <a href="http://localhost:5000/subject/${item.SubID}">${item.SubName}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/subject/${item.SubID}">${item.SubID}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/subject/${item.SubID}">${item.Room}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/subject/${item.SubID}">${item.SubCredits}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/subject/${item.SubID}">${item.StartTime}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/subject/${item.SubID}">${item.EndTime}</a>
                    </td>
                                       
                 </tr>
                `)
        res.render("AllSubject", {
            Data: listElem
        })
    })

})

module.exports = Router