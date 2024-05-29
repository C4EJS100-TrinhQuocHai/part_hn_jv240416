let data=[
    {
       name:"ngân",
       age:18,
       id:15,
       address:"hà nội" 
    },
    {
        name: "thu",
        age: 19,
        id: 16,
        address: "hcm"
    }, {
        name: "thành",
        age: 20,
        id: 17,
        address: "hà nam"
    }
]
 function renderDate() {
    let html="";
    for (let i = 0; i < data.length; i++) {
       
        html+=
        `
             <tr>
                <td>${i+1}</td>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].address}</td>
            </tr>
        `
    }
    document.getElementById("ngan").innerHTML=html;
 }
 renderDate();