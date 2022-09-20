let data = JSON.parse(localStorage.data);
console.log(data);

document.querySelector(
  ".cart__item__content__description"
).innerHTML += ` <h2>${data.name}</h2>
<p>${data.color}</p>
<p>${data.price} €</p>
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
  value= ${data.qty} 
  />`;

document.querySelector("#totalPrice").innerHTML += `${data.price * data.qty}`;

document.querySelector("#totalQuantity").innerHTML += `${data.qty}`;

document.querySelector(
  ".cart__item__img"
).innerHTML += `<img src="${data.imageUrl}"/>`;

document.querySelector(".deleteItem").addEventListener("click", () => {
  alert("Suppression de votre panier");
  localStorage.removeItem("data");
  location.reload();
});
