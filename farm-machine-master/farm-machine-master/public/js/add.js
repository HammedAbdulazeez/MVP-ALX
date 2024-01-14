const name = document.querySelector("#name")
const des = document.querySelector("#description")
const image = document.querySelector("#image")
const btn = document.querySelector("#btn")

// const btnClick = () => {
//     console.log(name);
// }



btn.addEventListener('click', (e) => {
    e.preventDefault()
    const newAdd =  {
       name: name.value,
       des: des.value,
       image: image.value
    }
    // console.log(newAdd);
    // return fetch('https://api.myjson.com/bins/13mamp',{
    //     method: "post",
    //     contentType:"application/json; charset=utf-8",
    //     dataType:"json",
 
    //     // headers: {
    //     //     'Content-Type': 'application/json',
    //     //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //     // },
    //     body: JSON.stringify(newAdd) // body data type must match "Content-Type" header

    // }).then(res =>  {
    //     // console.log( res.json());
    //     return res.json()
    // })
    

    const data = JSON.stringify(newAdd)

    $.ajax({
        url:"https://api.myjson.com/bins/13mamp",
        type:"POST",
        data: data,
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data, textStatus, jqXHR){
            console.log(data);
        }
    })
})
