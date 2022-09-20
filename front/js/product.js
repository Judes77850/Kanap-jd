const id = getId();

fetch("http://localhost:3000/api/products/" + id)
  .then((res) => res.json())
  .then((product) => {
    document.querySelector("#title").innerHTML += product.name;
    document.querySelector("#price").innerHTML += product.price;
    document.querySelector("#description").innerHTML += product.description;
    for (i = 0; i < product.colors.length; i++)
      document.querySelector("#colors").innerHTML +=
        "<option>" + product.colors[i] + "</option>";
    document
      .querySelector(".item__img img")
      .setAttribute("src", product.imageUrl);
    document.querySelector("#addToCart").addEventListener("click", () => {
      const color = document.querySelector("#colors").value;
      const qty = document.querySelector("#quantity").value;
      if (qty < 1 || qty > 100) {
        alert("Merci de selectionner une quantité valide");
        return;
      }
      if (color.length === 0) {
        alert("Veuillez selectionner une couleur");
        return;
      }
      if (!product.colors.includes(color)) {
        alert("ouille");
        return;
      }

      const products = [];
      let items = {
        name: product.name,
        id: product._id,
        color: color,
        qty: qty,
        price: product.price,
        imageUrl: product.imageUrl,
      };

      let data = JSON.stringify(items);
      console.log(data);
      localStorage.data = data;
      alert(product.name + " " + color + " a été ajouté a votre panier ");
    });
  });

function getId() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  return (value = params.id);
}
