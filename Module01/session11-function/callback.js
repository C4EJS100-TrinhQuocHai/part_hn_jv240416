/* 
    callback: hàm được truyền vào làm tham đố của hàm khác.
    ở trong javascript thường xử lý các tác vụ bất đồng bộ.

*/
// console.log("111");
let count=0;
setInterval(()=>{
    count++
    console.log("thảo lang",count);
},1000)

// console.log("333");
// console.log("111");
// setTimeout(()=>{
//     console.log("222");
// },1000)
// console.log("333");

//     let sdt;
//     function xinSdt(callback1){
//         console.log("Hiệp gọi cho Minh xin số Hoa");
//         console.log("Minh bảo đợi một chút để tìm số của Hoa");
//         setTimeout(() => {
//             console.log("Minh đã tìm thấy số của Hoa");
//             sdt=123456;
//             callback1(sdt);
//         }, 3000);
//         // callback sinh ra để giải quyết vấn đề này.
//     }
//         // tạo function có số điện thoại mới gọi 
//         function goiKhiCoSoCuaHoa(phoneNumber) {
//             console.log(`Hiệp gọi cho Hoa theo số ${phoneNumber}`);
//         }
//         // goiKhiCoSoCuaHoa("chung");
// xinSdt(goiKhiCoSoCuaHoa);
// function test(params) {
//     console.log(2222222,params);
// }
// test();
// test("chung");
