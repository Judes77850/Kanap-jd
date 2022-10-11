function has(key) {
  return !!localStorage.getItem(key);
}

function get(key) {
  if (has(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
}

function store(key, value) {
  if (has(key)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function money(value) {
  // Create our number formatter.
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
