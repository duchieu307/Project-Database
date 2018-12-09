const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/allteacher", (req, res) => {
    FileController.findAllTeacher((err, docs) => {
        let Arr = docs;
        let listElem = Arr.map((item, index) => `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>
                        <a href="">${item.TeFirstName}</a>
                    </td>
                    <td>
                        <a href="">${item.TeLastName}</a>
                    </td>
                    <td>
                        <a href="">${item.TeUserName}</a>
                    </td>
                    <td>
                        <a href="">${item.TeEmail}</a>
                    </td>
                    <td>
                        <a href="">${item.TeBDay}</a>
                    </td>
                    <td>
                        <a href="">${item.TeID}</a>
                    </td>
                    <td>
                        <a href="">${item.TeIntitution}</a>
                    </td>
                    <td>
                        <a href="">${item.TeLevel}</a>
                    </td>
                    
                    <td>
                        <a href="">${item.TeCity}</a>
                    </td>
                    <td>
                        <a href="">${item.TeProvince}</a>
                    </td>



                    
                 </tr>
                `)
        res.render("AllTeacher", {
            Data: listElem
        })
    })

})

module.exports = Router