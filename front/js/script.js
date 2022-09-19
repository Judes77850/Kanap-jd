fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((products) => {
    display(products);
  });

function render(product) {
  return `
    <a href="./product.html?id=${product._id}">
    <article>
    <img src="${product.imageUrl}"/>
    <h3 id="productName">${product.name}</h3>
    <p id="productDescription">${product.description}</p>
    </article>
    </a>
    `;
}

function display(products) {
  products.forEach((product) => {
    document.querySelector("#items").innerHTML += render(product);
  });
}
