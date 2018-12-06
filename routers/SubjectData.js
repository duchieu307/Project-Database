const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");
const StuSchema = require("../models/studentSchema")

Router.get("/subject/:id", (req, res) => {
    let SubID = req.params.id;
    FileController.getSubjectData(SubID, async function (err, docs) {
        if (err) console.log(err)
        // let Arr = docs
        let Arr = docs[0].StudentsInClass
        let Subject = docs[0].SubName
        let TeachID = docs[0].TeacherInClass
        // console.log(Arr)
        // res.send(Arr)
        console.log(TeachID)
        let listElem = Arr.map((item, index) =>
            `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>
                    <a href="">${item.Stu_id.StuFirstName}</a>
                </td>
                <td>
                    <a href="">${item.Stu_id.StuLastName}</a>
                </td>
                <td>
                    <a href="">${item.Stu_id.StuStudentID}</a>
                </td>
                <td>
                    <a href="">${item.Stu_id.StuClass}</a>
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
        // res.send(item)
        await FileController.getTeacherInSubject(TeachID, async function (err, data) {
            let Vuong = data
            console.log(Vuong)
            await res.render("SubjectData", {
                Teacher: Vuong,
                Data: listElem,
                Subject: Subject
            })
        })

    })

})

module.exports = Router