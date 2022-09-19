const product = window.location.search;

console.log(product);

var str =
  "http://127.0.0.1:5500/front/html/product.html?id=107fb5b75607497b96722bda5b504926";
var url = new URL(str);
var productId = url.searchParams.get("id");
console.log(productId);
