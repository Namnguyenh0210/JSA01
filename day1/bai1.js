let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03", "mindX 05"]
    }
]

// CÁCH 1 ( CÁCH NÀY LÀM NHANH HƠN)
// let ageInput = prompt("Độ tuổi cần tìm?");
// findStudentsByAge(parseInt(ageInput));


// function findStudentsByAge(age) {
//     let foundStudents = student.filter(s => s.age === age);
//     if (foundStudents.length > 0) {
//         console.log("Những học sinh có độ tuổi " + age + ":");
//         foundStudents.forEach(s => console.log(s.name));
//     } else {
//         console.log("Không tìm thấy!");
//     }
// }

// CÁCH 2 

// findstudent = []
// for (let index = 0; index < student.length; index++) {
//     const hs = student[index];
//     if(findage == hs.age) findstudent.push(hs)
// }
// findstudent.length == 0 ? alert("không có độ tuổi cần tìm") : console.log(findstudent);


//cach3
let findage =  prompt("độ tuôi bạn cần tìm ?")
let findstudent = student.filter(hs => hs.course.filter)
 findstudent.length == 0 ? alert("không có độ tuổi cần tìm") : console.log(findstudent);


 let findcourse = prompt("Khóa học cần tìm?")

 let studentname = student.filter(hs => {
    let khoahoc = hs.course.filter(iteam => iteam == findcourse)
    khoahoc.length == 0 ? false : true
 })
 console.log(studentname.map(hs => hs.name));
//1.b
// Cách 1
// let findcourse = prompt("Khóa học cần tìm?")

// let studentname = []

// for (let index = 0; index < student.length; index++) {
//     const hs = student[index];
//     for (let i = 0; i < hs.course.length; i++) {
//         let item = hs.course[i]
//         if (findcourse == item) studentname.push(hs.name)
//     }
// }
// console.log(studentname);







// console.log(student[1].age);
// lay ra duoc tuoi cua ban co ten la nvb