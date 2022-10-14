let myForm = document.querySelector(".cart__order__form");
//let prodInCart = JSON.stringify.localStorage;
console.log(localStorage.products.length);

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let myFirstName = document.getElementById("firstName");
  let myLastName = document.getElementById("lastName");
  let myAddress = document.getElementById("address");
  let myCity = document.getElementById("city");
  let myEmail = document.getElementById("email");
  // regexes fonctionnant pour les Noms / Prénoms internationaux
  const regexes = {
    myFirstName:
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð -]+$/u,
    myLastName:
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð -]+$/u,
    myAddress:
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\-0-9\s]+$/,
    myCity:
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '-]+$/u,
    myEmail:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  };

  hideError(myFirstName);
  hideError(myLastName);
  hideError(myAddress);
  hideError(myCity);
  hideError(myEmail);
  let error = 0;

  //Prenom
  if (regexes.myFirstName.test(myFirstName.value) == false) {
    error++;
    showError(myFirstName, "Merci de saisir des lettres uniquement");
  }

  // Nom
  if (regexes.myLastName.test(myLastName.value) == false) {
    error++;
    showError(myLastName, "Merci de saisir des lettres uniquement");
  }

  // Adresse
  if (regexes.myAddress.test(myAddress.value) == false) {
    error++;
    showError(myAddress, "Cette addresse n'est pas pas reconnue");
  }

  // Ville
  if (regexes.myCity.test(myCity.value) == false) {
    error++;
    showError(myCity, "Ce nom de ville n'est pas reconnu");
  }

  // Email
  if (!regexes.myEmail.test(myEmail.value)) {
    error++;
    showError(myEmail, "Cette adresse email n'est pas valide");
  }

  if (error > 0) {
    alert("Merci de corriger vos erreurs");
    return;
  }

  if (localStorage.products.length < 30) {
    alert("Aucun produit n'a été trouvé dans votre panier");
    return;
  }

  const lastName = document.querySelector("#lastName").value;
  const firstName = document.querySelector("#firstName").value;
  const address = document.querySelector("#address").value;
  const city = document.querySelector("#city").value;
  const email = document.querySelector("#email").value;

  const contact = {
    firstName,
    lastName,
    address,
    city,
    email,
  };

  const products = JSON.parse(localStorage.products).map((a) => a.id);
  alert(contact.firstName + ", votre commande est bien prise en compte");
  console.log(products);
  const toSend = {
    contact,
    products,
  };

  fetch("http://localhost:3000/api/products/order", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(toSend),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = `confirmation.html?order=${data.orderId}`;
    })

    .catch(function (res) {
      console.log(res);
    });

  // Permet de cacher les erreurs
  function hideError(input) {
    const myError = input.nextElementSibling;
    myError.innerText = "";
    myError.style.color = "red";
  }
  // Permet l'affichage des erreurs
  function showError(input, message) {
    const myError = input.nextElementSibling;
    myError.innerHTML = message;
    myError.style.color = "red";
  }
});
