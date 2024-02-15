const studentsData = require("../lib")

const students = (req,res) =>{
    const studentInfo = studentsData();
    console.log(studentInfo);
    res.send(studentInfo);
}


module.exports = students;