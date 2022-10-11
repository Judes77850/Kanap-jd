const id = getFromUrl("id");

fetch("http://localhost:3000/api/products/" + id)
  .then((res) => res.json())
  .then((product) => {
    displayProductDetails(product);
    listenForCartAddition(product);
  });

function getId() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  return (value = params.id);
}

function displayProductDetails(product) {
  document.querySelector("#title").innerHTML += product.name;
  document.querySelector("#price").innerHTML += money(product.price);
  document.querySelector("#description").innerHTML += product.description;
  for (i = 0; i < product.colors.length; i++)
    document.querySelector("#colors").innerHTML +=
      "<option>" + product.colors[i] + "</option>";
  document
    .querySelector(".item__img img")
    .setAttribute("src", product.imageUrl);
}

function listenForCartAddition(product) {
  document.querySelector("#addToCart").addEventListener("click", () => {
    const color = document.querySelector("#colors").value;
    const qty = Number(document.querySelector("#quantity").value);
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

    const firstTime = !get("products");
    if (firstTime) {
      const products = [];

      let item = {
        id: product._id,
        color: color,
        qty: Number(qty),
      };
      console.log(item);
      products.push(item);
      localStorage.setItem("products", JSON.stringify(products));
      //store("products", products);
      alert(product.name + " " + color + " a été ajouté a votre panier");
      return;
    }
    const storage = get("products");
    const doesProductExists = !!storage.find(
      (item) => item.id === product._id && color == item.color
    );
    console.log(doesProductExists);
    if (doesProductExists) {
      const existingProduct = storage.find(
        (item) => item.id === product._id && color == item.color
      );
      existingProduct.qty = Number(existingProduct.qty) + Number(qty);
      store("products", storage);
      alert(product.name + " " + color + " a été ajouté a votre panier");
      return;
    }

    let item = {
      id: product._id,
      color: color,
      qty: Number(qty),
    };

    storage.push(item);
    store("products", storage);
    alert(product.name + " " + color + " a été ajouté a votre panier");
  });
}
