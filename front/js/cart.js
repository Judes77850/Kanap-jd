fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((allProducts) => {
    const products = buildFinalList(allProducts);
    display(products);
    total(products);
    listenForProductQtyChange();
    listenForProductDelete();
  });

// Permet la modification de la quantité depuis le panier
function listenForProductQtyChange() {
  document.querySelectorAll(".itemQuantity").forEach((input) => {
    input.addEventListener("change", (event) => {
      const newQty = event.target.value;
      const id = event.target.closest(".cart__item").dataset.id;
      const color = event.target.closest(".cart__item").dataset.color;
      console.log(newQty, id, color);
      const storage = get("products");
      const product = storage.find((a) => a.id === id && a.color === color);
      product.qty = Number(newQty);
      store("products", storage);
      location.reload();
    });
  });
}

// Permet de supprimer un produit du panier
function listenForProductDelete() {
  document.querySelectorAll(".deleteItem").forEach((input) => {
    input.addEventListener("click", (event) => {
      const id = event.target.closest(".cart__item").dataset.id;
      const color = event.target.closest(".cart__item").dataset.color;
      const storage = get("products");
      const index = storage.findIndex((a) => a.id === id && a.color === color);
      storage.splice(index, 1);
      store("products", storage);
      location.reload();
    });
  });
}

// Permet le calcul des totaux
function total(products) {
  let totalQty = 0;
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    let prodQty = products[i].qty;
    let prodPrice = products[i].price;
    totalQty += products[i].qty;
    totalPrice = totalPrice + prodQty * prodPrice;
    document.querySelector("#totalQuantity").innerHTML = totalQty;
    document.querySelector("#totalPrice").innerHTML = money(totalPrice);
    const selectElement = document.querySelector(
      ".cart__item__content__settings__quantity"
    );
    //   selectElement
  }
}

function display(products) {
  let html = "";
  products.forEach((product) => {
    html += displayProduct(product);
  });
  document.querySelector("#cart__items").innerHTML = html;
}

// Affichage des produits du panier
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
              <p>${money(product.price * product.qty)}</p></div>
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

// Permet de construire une liste des éléments du panier ainsi que l'affichage d'un msg error si panier vide
function buildFinalList(allProducts) {
  const productsInCart = get("products");
  const message =
    ' semble bien vide, jetez un œil a <a href="./index.html">nos produits ...</a>';
  const elementTitle = document.getElementsByTagName("h1");
  if (productsInCart === null) {
    document.getElementsByTagName("h1")[0].innerHTML += message;
  } else if (productsInCart.length === 0) {
    document.getElementsByTagName("h1")[0].innerHTML += message;
  } else {
    const list = [];
    productsInCart.forEach((item) => {
      const productComplete = allProducts.find((a) => a._id === item.id);
      const product = { ...productComplete };
      product.qty = item.qty;
      product.color = item.color;
      list.push(product);
    });
    return list;
  }
}
