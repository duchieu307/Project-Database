const StuSchema = require("../models/studentSchema");
const async = require('async');


let createStu = (FirstName, LastName, UserName, DoB, StudentID, Class, Level, Avatar, Email, Password, District, City, Province, Address) => {
    let newStudentInfo = {
        StuFirstName: FirstName,
        StuLastName: LastName,
        StuUserName: UserName,
        StuEmail: Email,
        StuAvatar: Avatar,
        StuPassword: Password,
        StuDoB: DoB,
        StuStudentID: StudentID,
        StuClass: Class,
        StuLevel: Level,
        StuDistrict: District,
        StuCity: City,
        StuProvince: Province,
        StuAddress: Address
    }
    StuSchema.StudentInfo.create(newStudentInfo);
};

let createSub = (Room, StartTime, Endtime, SubID, SubName, SubCredits, SubCreditsDetails, StudentsInClass) => {
    let newSubjectInfo = {
        Room: Room,
        StartTime: StartTime,
        Endtime: Endtime,
        SubID: SubID,
        SubName: SubName,
        SubCredits: SubCredits,
        SubCreditsDetails: SubCreditsDetails,
        StudentsInClass: StudentsInClass
    }
    StuSchema.Subject.create(newSubjectInfo)
}

let createScore = async function (Mid_termScore, Final_termScore, Stu_id, ScoreID) {
    let AverageScore = Mid_termScore * 0.3 + Final_termScore * 0.7;
    let newScore = {
        Mid_termScore: Mid_termScore,
        Final_termScore: Final_termScore,
        Stu_id: Stu_id,
        AverageScore: AverageScore,
        ScoreID: ScoreID

    }
    await StuSchema.StudentStudyStatus.create(newScore)

}

const createTeacher = (TeFirstName, TeLastName, TeUserName, TeBDay, TeID, TeClass, TeLevel, TeIMG, TeTeach, TeEmail, TePassword, TeCity, TeState, TeProvince, TeAddress) => {
    let newTeacher = {
        TeFirstName: TeFirstName,
        TeLastName: TeLastName,
        TeUserName: TeUserName,
        TeBDay: TeBDay,
        TeID: TeID,
        TeClass: TeClass,
        TeLevel: TeLevel,
        TeIMG: TeIMG,
        TeTeach: TeTeach,
        TeEmail: TeEmail,
        TePassword: TePassword,
        TeCity: TeCity,
        TeState: TeState,
        TeProvince: TeProvince,
        TeAddress: TeAddress
    }
    StuSchema.Teacher.create(newTeacher);
}

let createTeach = async function (TeRoom, Teacher_id, TeachID) {
    let newTeachStatus = {
        TeRoom: TeRoom,
        Teacher_id: Teacher_id,
        TeachID: TeachID
    }
    await StuSchema.TeachStatus.create(newTeachStatus)
}

let createIntitution = (InName, InID, InOffice, InEmail, InPhone) => {
    let newIntitution = {
        InName: InName,
        InId: InID,
        InOffice: InOffice,
        InEmail: InEmail,
        InPhone: InPhone
    }
    StuSchema.Intitution.create(newIntitution)
}

let createTeBelongs = (TeID, InID) => {
    let newTeBelongs = {
        TeID: TeID,
        InID: InID
    }
    StuSchema.TeBelongs.create(newTeBelongs)
}

let createEduPrograms = (EduName, EduID) => {
    let newEduPrograms = {
        EduName: EduName,
        EduID: EduID
    }
    StuSchema.EduPrograms.create(newEduPrograms)
}

let createEduBelongs = (InID, EduID) => {
    let newEduBelongs = {
        InID: InID,
        EduID: EduID
    }
    StuSchema.EduBelongs.create(newEduBelongs)
}

let createClass = (ClaName) => {
    let newClass = {
        ClaName: ClaName
    }
    StuSchema.Class.create(newClass)
}

let createClassBelongs = (ClaName, EduID) => {
    let newClassBelongs = {
        ClaName: ClaName,
        EduID: EduID
    }
    StuSchema.ClassBelongs.create(newClassBelongs)
}

let createStuBelongs = (ClaName, StuID) => {
    let newStuBelongs = {
        ClaName: ClaName,
        StuID: StuID
    }
    StuSchema.StuBelongs.create(newStuBelongs)
}


let findAllStudent = (callback) => {
    try {
        StuSchema.StudentInfo.find({}, (err, docs) => {
            callback(err, docs)
        })
    } catch (error) {
        console.log(error)
    }
}

let findAllTeacher = (callback) => {
    try {
        StuSchema.Teacher.find({}, (err, docs) => {
            callback(err, docs)
        })
    } catch (error) {
        console.log(error)
    }
}

let testFunction = (callback) => {
    StuSchema.StudentInfo.find({})
        .limit(2)
        .exec((err, docs) => {
            if (err) console.log(err)
            return callback(null, docs)
        })
}

let findStudentByID = async function (StudentID, callback) {
    try {
        await StuSchema.StudentInfo.find({ StuStudentID: StudentID }, (err, docs) => {
            callback(err, docs)
        })
    } catch (error) {
        console.log(error)
    }
}

let findStudentByIDandUpdate = (FirstName, LastName, UserName, DoB, StudentID, newStudentID, Class, Email, District, City, Province, Address) => {
    StuSchema.StudentInfo.find({ StuStudentID: StudentID }, (err, data) => {
        console.log(data)
        data[0].StuFirstName = FirstName;
        data[0].StuLastName = LastName;
        data[0].StuUserName = UserName;
        data[0].StuDoB = DoB;
        data[0].StudentID = newStudentID;
        data[0].Class = Class;
        data[0].Email = Email;
        data[0].District = District;
        data[0].City = City;
        data[0].Province = Province;
        data[0].save((err) => {
            if (err) console.log(err)
            console.log("Updated")
        })
    })
}

//link đến nhiều bảng dùng cái này
let getSubjectData = (SubID, callback) => {
    StuSchema.Subject.find({ SubID: SubID }, ['SubName', 'Room', 'StudentsInClass', "TeacherInClass"])
        .populate({
            path: 'StudentsInClass', select: ['Stu_id', 'Mid_termScore', 'Final_termScore', 'AverageScore'],
            populate: {
                path: 'Stu_id', select: ["StuFirstName", "StuLastName", "StuStudentID", "StuClass"],
                model: 'StudentInfo'
            }
        })
        .exec((err, docs) => {
            if (err) console.log(err)
            // console.log(docs)
            return callback(null, docs)
        })
}

let getTeacherInSubject = (TeachID, callback) => {
    StuSchema.Subject.find({ TeacherInClass: TeachID }, 'TeacherInClass')
        .populate({
            path: "TeacherInClass", select: "Teacher_id",
            populate: {
                path: "Teacher_id", select: ["TeFirstName", "TeLastName"],
                model: "Teacher"
            }
        })
        .exec((err, docs) => {
            if (err) console.log(err)
            return callback(null, docs)
        })
}

// let findStuScoreID = (StuID, callback) => {
//     StuSchema.
// }

//giờ đây viết một cái hàm lấy SubID xong đẩy ObjectID của StudentStudyStatus của thằng học sinh vào cái array Subject
//render ra cái bảng với tên tuổi điểm của học sinh


//ham them student vao subject
let pushStudentToSubject = function (SubID, ScoreObjectID) {
    StuSchema.Subject.findOneAndUpdate({ SubID: SubID }, {
        $push: { StudentsInClass: ScoreObjectID }
    }, { new: true }, (err, doc) => {
        if (err) console.log(err)
        // console.log(doc)
    })
    console.log("Updated")
}

//ham them teacher vao subject
let pushTeacherToSubject = function (SubID, TeacherObjectID) {
    StuSchema.Subject.findOneAndUpdate({ SubID: SubID }, {
        $set: { TeacherInClass: TeacherObjectID }
    }, {
            new: true
        }, (err, doc) => {
            if (err) console.log(err)
        })
    console.log("Updated")
}

let findScoreObjectID = async function (ScoreID, callback) {
    try {
        await StuSchema.StudentStudyStatus.find({ ScoreID: ScoreID }, (err, docs) => {
            callback(err, docs)
        })
    } catch (error) {
        if (error) console.log(error)
    }
}

let findTeacherByID = async function (TeID, callback) {
    try {
        await StuSchema.Teacher.find({ TeID: TeID }, (err, docs) => {
            callback(err, docs)
        })
    } catch (error) {
        if (error) console.log(error)
    }
}

let findTeachObjectID = async function (TeachID, callback) {
    try {
        await StuSchema.TeachStatus.find({ TeachID: TeachID }, (err, docs) => {
            callback(err, docs)
        })
    } catch (error) {
        if (error) console.log(error)
    }
}


module.exports = {
    createStu,
    createSub,
    createScore,
    createTeacher,
    createTeach,
    createIntitution,
    createTeBelongs,
    createEduPrograms,
    createEduBelongs,
    createClass,
    createClassBelongs,
    createStuBelongs,
    findAllStudent,
    findAllTeacher,
    testFunction,
    findStudentByID,
    findStudentByIDandUpdate,
    getSubjectData,
    pushStudentToSubject,
    findScoreObjectID,
    findTeacherByID,
    findTeachObjectID,
    pushTeacherToSubject,
    getTeacherInSubject
}