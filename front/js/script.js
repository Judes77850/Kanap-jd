let productName = document.getElementById("productName");
let productDescription = document.getElementById("productDescription");
//let id = x + 1;

fetch("http://localhost:3000/api/products")
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    productName.textContent = response[0].name;
    productDescription.textContent = response[0].description;
    for (let i = 0; i < response.length; i++) {
      document.querySelector("#items").innerHTML +=
        "<a href='./product.html?id=" +
        response[i]._id +
        "'>" +
        "<article>" +
        "<img src='../../back/images/kanap0" +
        (i + 1) +
        ".jpeg'" +
        " alt=" +
        "'" +
        response[i].altTxt +
        "'" +
        "/>" +
        "<h3 id='productName'>" +
        response[i].name +
        "</h3>" +
        "<p id='productDescription'>" +
        response[i].description +
        "</p>" +
        "</article>" +
        "</a>";
      let productId = response[i]._id;
      console.log(productId);
    }
  });

// var str =
//   "http://127.0.0.1:5500/front/html/product.html?id=" + response[i]._id + "'>";
// var url = new URL(str);
// var productId = url.searchParams.get("id");
// console.log(productId);
