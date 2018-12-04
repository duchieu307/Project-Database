const StuSchema = require("../models/studentSchema");

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

let createSub = (Room, StartTime, Endtime, SubID, SubName, SubCredits, SubCreditsDetails) => {
    let newSubjectInfo = {
        Room: Room,
        StartTime: StartTime,
        Endtime: Endtime,
        SubID: SubID,
        SubName: SubName,
        SubCredits: SubCredits,
        SubCreditsDetails: SubCreditsDetails
    }
    StuSchema.Subject.create(newSubjectInfo)
}

let createScore = (Mid_termScore, Final_termScore, StuStudentID, SubID) => {
    let AverageScore = Mid_termScore * 0.3 + Final_termScore * 0.7;
    let newScore = {
        Mid_termScore: Mid_termScore,
        Final_termScore: Final_termScore,
        StuStudentID: StuStudentID,
        AverageScore: AverageScore,
        SubID: SubID
    }
    StuSchema.StudentStudyStatus.create(newScore)
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

let createTeach = (TeRoom, TeID, SubID) => {
    let newTeachStatus = {
        TeRoom: TeRoom,
        TeID: TeID,
        SubID: SubID
    }
    StuSchema.TeachStatus.create(newTeachStatus)
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

let findStudentByID = (StudentID, callback) => {
    try {
        StuSchema.StudentInfo.find({ StuStudentID: StudentID }, (err, docs) => {
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

let getSubjectData = (SubID, callback) => {
    StuSchema.Subject.find({ SubID: SubID }, ['SubName', 'Room'])
        .populate('StudentStudyStatus', ["StuStudentID", 'Mid_termScore', 'Final_termScore', 'AverageScore'])
        .populate('StudentInfo', ['StuFirstName', "StuLastName"])
        .populate("TeachStatus", ["TeID"])
        .populate("Teacher", ["TeFirstName", 'TeLastName'])
        .exec((err, docs) => {
            if (err) console.log(err)
            console.log(docs)
            return callback(null, docs)
        })
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
    getSubjectData
}