const productsInCart = get("products");

fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((products) => {
    console.log(AllProducts);
  });

// let storage = JSON.parse(localStorage.data);
// console.log(storage.item);
// let qty = product.qty;
// let price = product.price;
// let name = product.name;
// let color = product.color;

// document.querySelector(
//   ".cart__item__content__description"
// ).innerHTML += ` <h2>${name}</h2>
// <p>${color}</p>
// <p>${price} €</p>
// `;

// document.querySelector(
//   ".cart__item__content__settings__quantity"
// ).innerHTML += `<p>Qté :</p>
// <input
//   type="number"
//   class="itemQuantity"
//   name="itemQuantity"
//   min="1"
//   max="100"
//   value= ${qty}
//   />`;

// document.querySelector("#totalQuantity").textContent = `
//   ${qty}`;
// document.querySelector("#totalPrice").textContent = `${price * qty}`;
// const selectElement = document.querySelector(
//   ".cart__item__content__settings__quantity"
// );
// selectElement.addEventListener("change", (event) => {
//   qty = event.target.value;
//   console.log(qty);
//   document.querySelector("#totalQuantity").textContent = `
//   ${qty}`;
//   document.querySelector("#totalPrice").textContent = `${price * qty}`;
// });

// document.querySelector(
//   ".cart__item__img"
// ).innerHTML += `<img src="${data.imageUrl}"/>`;

// document.querySelector(".deleteItem").addEventListener("click", () => {
//   confirm("Êtes vous sur de vouloir supprimer votre panier ?");
//   localStorage.removeItem("data");
//   location.reload();
// });
