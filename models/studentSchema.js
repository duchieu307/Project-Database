
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    StuFirstName: { type: String, require: true },
    StuLastName: { type: String, require: true },
    StuUserName: { type: String, require: true },
    StuEmail: { type: String, require: true },
    StuAvatar: { type: String },
    StuPassword: { type: String, require: true },
    StuDoB: { type: String, require: true },
    StuStudentID: { type: Number, require: true },
    StuClass: { type: String, require: true },
    StuLevel: { type: String, require: true },
    StuDistrict: { type: String, require: true },
    StuCity: { type: String, require: true },
    StuProvince: { type: String, require: true },
    StuAddress: { type: String, require: true },
}, {
        _id: true,
    }
);




const StudentStudyStatusSchema = {

    Mid_termScore: { type: Number, require: true },
    Final_termScore: { type: Number, require: true },
    AverageScore: { type: Number, require: true },
    ScoreID: { type: String, require: true },
    Stu_id: { type: mongoose.Schema.Types.ObjectId, ref: "StudentInfo", require: true },
    SubName: { type: String, require: true }

    //link den cai nao thi phai chung kieu du lieu toi cai minh link
}


const SubjectSchema = {
    Room: { type: String, require: true },
    StartTime: { type: String, require: true },
    EndTime: { type: String, require: true },
    SubID: { type: String, require: true },
    SubName: { type: String, require: true },
    SubCredits: { type: String, require: true },
    SubCreditsDetails: { type: String, require: true },
    StudentsInClass: [{ type: mongoose.Schema.Types.ObjectId, ref: "StudentStudyStatus", default: [] }],
    TeacherInClass: { type: mongoose.Schema.Types.ObjectId, ref: "TeachStatusSchema" }
    // SSSID: { type: mongoose.Schema.Types.ObjectId, ref: "StudentStudyStatus", require: true }
}


const TeacherSchema = {
    TeFirstName: { type: String, require: true },
    TeLastName: { type: String, require: true },
    TeUserName: { type: String, require: true },
    TeBDay: { type: String, require: true },
    TeID: { type: String, require: true },
    TeIntitution: { type: String, require: true },
    TeLevel: { type: String, require: true },
    TeIMG: { type: String },
    TeTeach: { type: String, require: true },
    TeEmail: { type: String, require: true },
    TePassword: { type: String, require: true },
    TeCity: { type: String, require: true },
    TeState: { type: String, require: true },
    TeProvince: { type: String, require: true },
    TeAddress: { type: String, require: true }
}


const TeachStatusSchema = {
    TeRoom: { type: String, require: true },
    Teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "TeacherSchema" },
    TeachID: { type: String, require: true }
}


const IntitutionSchema = {
    InName: { type: String, require: true },
    InID: { type: String, require: true },
    InOffice: { type: String, require: true },
    InEmail: { type: String, require: true },
    InPhone: { type: Number, require: true },
    TeacherInIntitution: [{ type: mongoose.Schema.Types.ObjectId, ref: "TeacherSchema" }],
    SubjectInIntitution: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubjectSchema" }],
    EduInIntitution: [{ type: mongoose.Schema.Types.ObjectId, ref: "EduBelongs" }]
}





const EduProgramsSchema = {
    EduName: { type: String, require: true },
    EduID: { type: String, require: true },
    ClassInEdu: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }]
}





const ClassSchema = {
    ClaName: { type: String, require: true },
    StudentsInClass: [{ type: mongoose.Schema.Types.ObjectId, ref: "StudentInfo" }],
    MonitorID: { type: mongoose.Schema.Types.ObjectId, ref: "StudentInfo" }
}








// NÓ REF TỚI CÁI TÊN CỦA BẢNG LÀ CÁI STRING VÀNG VÀNG KIA KÌA
var StudentInfo = mongoose.model("StudentInfo", studentSchema)
var StudentStudyStatus = mongoose.model("StudentStudyStatus", StudentStudyStatusSchema)
var Subject = mongoose.model("SubjectSchema", SubjectSchema)
var Teacher = mongoose.model("TeacherSchema", TeacherSchema)
var TeachStatus = mongoose.model("TeachStatusSchema", TeachStatusSchema)
var Intitution = mongoose.model("IntitutionSchema", IntitutionSchema)
var EduPrograms = mongoose.model("EduPrograms", EduProgramsSchema)
var Class = mongoose.model("Class", ClassSchema)

module.exports = {
    StudentInfo: StudentInfo,
    StudentStudyStatus: StudentStudyStatus,
    Subject: Subject,
    Teacher: Teacher,
    TeachStatus: TeachStatus,
    Intitution: Intitution,
    EduPrograms: EduPrograms,
    Class: Class,

}