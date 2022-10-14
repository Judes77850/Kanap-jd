function has(key) {
  return !!localStorage.getItem(key);
}

function get(key) {
  if (has(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
}

// permet d'ajouter au localStorage
function store(key, value) {
  if (has(key)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

// Formate les valeurs monétaires
function money(value) {
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

  return formatter.format(value);
}

function getFromUrl(key) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  return (value = params[key]);
}
