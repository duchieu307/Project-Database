const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/allstudent", (req, res) => {
    try {

        FileController.findAllStudent((err, docs) => {
            if (err) console.log(err)
            else {
                let Arr = docs;
                // console.log(docs)
                let listElem = Arr.map((item, index) => `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuFirstName}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuLastName}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuUserName}</a>
                    </td>
                   
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuDoB}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuStudentID}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuClass}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuLevel}</a>
                    </td>
                    
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuCity}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/${item.StuStudentID}/info">${item.StuProvince}</a>
                    </td>



                    
                 </tr>
                `)


                res.render("AllStudent", {
                    Data: listElem
                })
            }
        })

    } catch (error) {
        console.log(error)
    }

})

module.exports = Router