fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((allProducts) => {
    const products = buildFinalList(allProducts);
    display(products);
    total(products);
    console.log(products);
  });

function total(products) {
  let totalQty = 0;
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    let prodQty = products[i].qty;
    let prodPrice = products[i].price;
    totalQty += products[i].qty;
    totalPrice += prodQty * prodPrice;
    document.querySelector("#totalQuantity").innerHTML = totalQty;
    document.querySelector("#totalPrice").innerHTML = totalPrice;
    const selectElement = document.querySelector(
      ".cart__item__content__settings__quantity"
    );
    selectElement.addEventListener("change", (event) => {
      document.querySelector("#totalQuantity").textContent = `${totalQty}`;
      prodQty = Number(event.target.value);
      //location.reload();
      console.log(prodQty);
      //totalQty = prodQty + difQty;
      document.querySelector("#totalPrice").innerHTML = prodPrice * prodQty;
    });
  }
}

function display(products) {
  let html = "";
  products.forEach((product) => {
    html += displayProduct(product);
  });
  document.querySelector("#cart__items").innerHTML = html;
}

function displayProduct(product) {
  return `
          <article class="cart__item" data-id="${product._id}" data-color="${
    product.color
  }">
            <div class="cart__item__img">
              <img src="${product.imageUrl}" />
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description"><h2>${
                product.name
              }</h2>
              <p>${product.color}</p>
              <p>${product.price * product.qty} €</p></div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value= ${
                  product.qty
                } />
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article>`;
}

function buildFinalList(allProducts) {
  const productsInCart = get("products");
  const list = [];

  productsInCart.forEach((item) => {
    const productComplete = allProducts.find((a) => a._id === item.id);
    productComplete.qty = item.qty;
    productComplete.color = item.color;
    list.push(productComplete);
  });
  return list;
}
