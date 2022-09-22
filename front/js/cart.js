let data = JSON.parse(localStorage.data);
console.log(data.name);
let qty = data.qty;
let price = data.price;
let name = data.name;
let color = data.color;

document.querySelector(
  ".cart__item__content__description"
).innerHTML += ` <h2>${name}</h2>
<p>${color}</p>
<p>${price} €</p>
`;

document.querySelector(
  ".cart__item__content__settings__quantity"
).innerHTML += `<p>Qté :</p>
<input
  type="number"
  class="itemQuantity"
  name="itemQuantity"
  min="1"
  max="100"
  value= ${qty} 
  />`;

document.querySelector("#totalQuantity").textContent = `
  ${qty}`;
document.querySelector("#totalPrice").textContent = `${price * qty}`;
const selectElement = document.querySelector(
  ".cart__item__content__settings__quantity"
);
selectElement.addEventListener("change", (event) => {
  qty = event.target.value;
  console.log(qty);
  document.querySelector("#totalQuantity").textContent = `
  ${qty}`;
  document.querySelector("#totalPrice").textContent = `${price * qty}`;
});

document.querySelector(
  ".cart__item__img"
).innerHTML += `<img src="${data.imageUrl}"/>`;

document.querySelector(".deleteItem").addEventListener("click", () => {
  confirm("Êtes vous sur de vouloir supprimer votre panier ?");
  localStorage.removeItem("data");
  location.reload();
});
