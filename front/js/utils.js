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
