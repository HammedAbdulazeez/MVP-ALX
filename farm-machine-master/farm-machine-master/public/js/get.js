// requirejs()
$(function () {
  // const main = document.querySelector("#main")
  const upd = (a) => {
    console.log(a.id);
  }
  fetch(`https://api.myjson.com/bins/13mamp`)
    .then(response => response.json())
    .then(res => {
      console.log(res)
      return res.tools.map(item => {
        console.log(item);
        return $("#main").append(
          `<div class="card submain p-5" style="width: 18rem;" id="">
            <img src=${item.image} id="img" class="card-img-top" alt="..." width="100%" height="80%">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.des}</p>
              <div class="text-center"><button class="btn btn-primary" id="upd"  onClick=${upd(item)}> Update</button>
              <button class="btn btn-primary">Delete</button></div>
            </div>
          </div>`
        )
      })

    })
    .catch(err => {
      console.log("err: " + err);
    });



//   $.ajax({
//     method: 'GET',
//     url: 'http://localhost:3000/tools',
//     dataType: 'json',
// }).done(function(data){
//     $.map(data, function(post, i){
//       console.log(post);
//         $("#main").append(`
//         <div class="card border border-primary rounded text-center each" style="width: 18rem;" id=${post.id}>
//         <img class="card-img-top" src=${post.image} alt="Card image cap" height="200">
//         <div class="card-body">
//             <h5 class="card-title">${post.name}</h5>
//             <p class="card-text">${post.des}.</p>
//             <button class="btn btn-outline-success my-2 my-sm-0" id="update" type="submit">Update</button>
//             <button class="btn btn-outline-warning my-2 my-sm-0" id="delete" type="submit">Delete</button>

//         </div>
//         </div>`)
//     })

// })

})
