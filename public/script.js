const stripe = Stripe('pk_test_51RRlPOAcjYn5KlGV9MdwfC5MMe2HTwyOvPQK02hlsrUQ3BTQS7716babkdQ5aA8EjKep34RLhBkXSTE5LsLuZx9r004vMf0HCw');

function showMessage() {
    alert("Button clicked!");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.getElementById("buy-button");

  buyButton.addEventListener("click", () => {
    fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: "zero-point-tee" // optional
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch(err => console.error("Error:", err));
  });
});
