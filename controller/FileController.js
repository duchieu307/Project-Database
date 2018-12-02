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
    findAllTeacher
}