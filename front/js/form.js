let myForm = document.querySelector(".cart__order__form");

// Prenom
myForm.addEventListener("submit", function (e) {
  let myFirstName = document.getElementById("firstName");
  let myReggex = /^[a-zA-Z-\s]+$/;

  if (myFirstName.value.trim() == "") {
    let myError = document.getElementById("firstNameErrorMsg");
    myError.innerHTML = "le champs Prénom est requis";
    myError.style.color = "red";
    e.preventDefault();
  } else if (myReggex.test(myFirstName.value) == false) {
    let myError = document.getElementById("firstNameErrorMsg");
    myError.innerHTML = "Seuls les lettres et les tirets sont autorisés";
    myError.style.color = "red";
    e.preventDefault();
  }
});

// Nom
myForm.addEventListener("submit", function (e) {
  let myLastName = document.getElementById("lastName");
  let myReggex = /^[a-zA-Z-\s]+$/;

  if (myLastName.value.trim() == "") {
    let myError = document.getElementById("lastNameErrorMsg");
    myError.innerHTML = "le champs Nom est requis";
    myError.style.color = "red";
    e.preventDefault();
  } else if (myReggex.test(myLastName.value) == false) {
    let myError = document.getElementById("lastNameErrorMsg");
    myError.innerHTML = "Seuls les lettres et les tirets sont autorisés";
    myError.style.color = "red";
    e.preventDefault();
  }
});

// Adresse
myForm.addEventListener("submit", function (e) {
  let myAddress = document.getElementById("address");
  let myReggex = /^[a-zA-Z\-0-9\s]+$/;

  if (myAddress.value.trim() == "") {
    let myError = document.getElementById("addressErrorMsg");
    myError.innerHTML = "le champs Adresse est requis";
    myError.style.color = "red";
    e.preventDefault();
  } else if (myReggex.test(myAddress.value) == false) {
    let myError = document.getElementById("addressErrorMsg");
    myError.innerHTML =
      "Seuls les lettres, les chiffres et les tirets sont autorisés";
    myError.style.color = "red";
    e.preventDefault();
  }
});

// Ville
myForm.addEventListener("submit", function (e) {
  let myCity = document.getElementById("city");
  let myReggex = /^[a-zA-Z-\s]+$/;

  if (myCity.value.trim() == "") {
    let myError = document.getElementById("cityErrorMsg");
    myError.innerHTML = "le champs Ville est requis";
    myError.style.color = "red";
    e.preventDefault();
  } else if (myReggex.test(myCity.value) == false) {
    let myError = document.getElementById("cityErrorMsg");
    myError.innerHTML = "Seuls les lettres et les tirets sont autorisés";
    myError.style.color = "red";
    e.preventDefault();
  }
});

// Email
myForm.addEventListener("submit", function (e) {
  let myEmail = document.getElementById("email");
  let myReggex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (myEmail.value.trim() == "") {
    let myError = document.getElementById("emailErrorMsg");
    myError.innerHTML = "le champs Email est requis";
    myError.style.color = "red";
    e.preventDefault();
  } else if (myReggex.test(myEmail.value) == false) {
    let myError = document.getElementById("emailErrorMsg");
    myError.innerHTML = "Merci de saisir une adresse email valide";
    myError.style.color = "red";
    e.preventDefault();
  }
});
