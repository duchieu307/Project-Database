
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
    Stu_id: { type: mongoose.Schema.Types.ObjectId, ref: "StudentInfo", require: true }


    //link den cai nao thi phai chung kieu du lieu toi cai minh link
}


const SubjectSchema = {
    Room: { type: String, require: true },
    StartTime: { type: Date, require: true },
    EndTime: { type: Date, require: true },
    SubID: { type: String, require: true },
    SubName: { type: String, require: true },
    SubCredits: { type: String, require: true },
    SubCreditsDetails: { type: String, require: true },
    StudentsInClass: [{ type: mongoose.Schema.Types.ObjectId, ref: "StudentStudyStatus" }],
    TeacherInClass: { type: mongoose.Schema.Types.ObjectId, ref: "TeachStatusSchema" }
    // SSSID: { type: mongoose.Schema.Types.ObjectId, ref: "StudentStudyStatus", require: true }
}


const TeacherSchema = {
    TeFirstName: { type: String, require: true },
    TeLastName: { type: String, require: true },
    TeUserName: { type: String, require: true },
    TeBDay: { type: String, require: true },
    TeID: { type: String, require: true },
    TeClass: { type: String, require: true },
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
}


const TeBelongsSchema = {
    TeID: { type: mongoose.Schema.Types.String, ref: 'TeacherSchema' },
    InID: { type: mongoose.Schema.Types.String, ref: "Intitution" }
}


const EduProgramsSchema = {
    EduName: { type: String, require: true },
    EduID: { type: String, require: true }
}


const EduBelongsSchema = {
    InID: { type: mongoose.Schema.Types.String, ref: "Intitution" },
    EduID: { type: mongoose.Schema.Types.String, ref: "EduPrograms" }
}


const ClassSchema = {
    ClaName: { type: String, require: true }
}


const ClassBelongsSchema = {
    ClaName: { type: mongoose.Schema.Types.String, ref: "Class" },
    EduID: { type: mongoose.Schema.Types.String, ref: "EduPrograms" }
}


var StuBelongsSchema = {
    ClaName: { type: mongoose.Schema.Types.String, ref: "Class" },
    StuID: { type: mongoose.Schema.Types.Number, ref: "StudentInfo" }

}


// NÓ REF TỚI CÁI TÊN CỦA BẢNG LÀ CÁI STRING VÀNG VÀNG KIA KÌA
var StudentInfo = mongoose.model("StudentInfo", studentSchema)
var StudentStudyStatus = mongoose.model("StudentStudyStatus", StudentStudyStatusSchema)
var Subject = mongoose.model("SubjectSchema", SubjectSchema)
var Teacher = mongoose.model("TeacherSchema", TeacherSchema)
var TeachStatus = mongoose.model("TeachStatusSchema", TeachStatusSchema)
var Intitution = mongoose.model("IntitutionSchema", IntitutionSchema)
var TeBelongs = mongoose.model("TeBelongs", TeBelongsSchema)
var EduPrograms = mongoose.model("EduPrograms", EduProgramsSchema)
var EduBelongs = mongoose.model("EduBelongs", EduBelongsSchema)
var Class = mongoose.model("Class", ClassSchema)
var ClassBelongs = mongoose.model("ClassBelongs", ClassBelongsSchema)
var StuBelongs = mongoose.model("StuBelongs", StuBelongsSchema)

module.exports = {
    StudentInfo: StudentInfo,
    StudentStudyStatus: StudentStudyStatus,
    Subject: Subject,
    Teacher: Teacher,
    TeachStatus: TeachStatus,
    Intitution: Intitution,
    TeBelongs: TeBelongs,
    EduPrograms: EduPrograms,
    EduBelongs: EduBelongs,
    Class: Class,
    ClassBelongs: ClassBelongs,
    StuBelongs: StuBelongs
}