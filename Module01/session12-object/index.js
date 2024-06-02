// khởi tạo đối tượng product (sản phẩm)
const product={
    name:"iphone5",
    quantity:5,
    price:"15.000.000",
    color:"blue",
};
//[]
// khởi tạo đối tượng sách
const book={};

// // khởi tạo đối tượng student
const student={
    /* 
        name:"Hồng Vân",
        age:20,
        address:"Hà Nội",
       
    */
}
// thầy muốn thêm thuộc tính name cho đối tượng student
let userName="Hồng Vân";
student.name=userName;
// thêm thuộc tính age;
student.age=20;
student["address"]="Hà Nội";
for (const keyName in student) {
    // console.log("keyName",keyName);//name, age, address
    console.log("value",student[keyName]);//undefined
}
 student.age=21;
 delete student.age;
 console.log("student",student);
