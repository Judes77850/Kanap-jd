const product = window.location.search;

console.log(product);

var str = "http://127.0.0.1:5500/front/html/product.html?id=";
var url = new URL(str);
var productId = url.searchParams.get("id");
console.log(productId);

// if (productId === "?id=107fb5b75607497b96722bda5b504926") {
//   result = product[0];
// }
// if (productId === "415b7cacb65d43b2b5c1ff70f3393ad1") {
//   result = product[1];
// }
// if (productId === "055743915a544fde83cfdfc904935ee7") {
//   result = product[2];
// }
// if (productId === "a557292fe5814ea2b15c6ef4bd73ed83") {
//   result = product[3];
// }
// if (productId === "8906dfda133f4c20a9d0e34f18adcf06") {
//   result = product[4];
// }
// if (productId === "77711f0e466b4ddf953f677d30b0efc9") {
//   result = product[5];
// }
// if (productId === "034707184e8e4eefb46400b5a3774b5f") {
//   result = product[6];
// } else {
//   console.log("error");
// }
