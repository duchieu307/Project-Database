const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/allstudent", (req, res) => {
    try {

        FileController.findAllStudent((err, docs) => {
            if (err) console.log(err)
            else {
                let Arr = docs;
                console.log(docs)
                let listElem = Arr.map((item, index) => `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>
                        <a href="">${item.StuFirstName}</a>
                    </td>
                    <td>
                        <a href="">${item.StuLastName}</a>
                    </td>
                    <td>
                        <a href="">${item.StuUserName}</a>
                    </td>
                    <td>
                        <a href="">${item.StuEmail}</a>
                    </td>
                    <td>
                        <a href="">${item.StuDoB}</a>
                    </td>
                    <td>
                        <a href="">${item.StuStudentID}</a>
                    </td>
                    <td>
                        <a href="">${item.StuClass}</a>
                    </td>
                    <td>
                        <a href="">${item.StuLevel}</a>
                    </td>
                    
                    <td>
                        <a href="">${item.StuCity}</a>
                    </td>
                    <td>
                        <a href="">${item.StuProvince}</a>
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