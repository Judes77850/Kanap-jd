const orderId = getFromUrl("order");
document.getElementById("orderId").innerText = ` ${orderId}, 
nous vous remercions pour votre confiance`;

localStorage.clear();
