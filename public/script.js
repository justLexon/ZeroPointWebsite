

document.addEventListener("DOMContentLoaded", () => {
 const stripe = Stripe('STRIPE_FRONTEND_KEY');

  const buyButton = document.getElementById('buy-button');
  if (buyButton) {
    buyButton.addEventListener('click', async () => {
      try {
        const response = await fetch('/create-checkout-session', { method: 'POST' });
        const session = await response.json();

        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          console.error(error);
          alert('Payment could not be processed. Please try again.');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        alert('Something went wrong. Please try again.');
      }
    });
  }


  // Modal image enlarge
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("fullImg");
  const closeBtn = document.querySelector(".close");

  const thumbnails = document.querySelectorAll(".clickableImgs");


  thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});



document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-linksA a');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    // Compare using `endsWith` to match 'Shop.html', etc.
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    }
  });

  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle');
  const closeBtn = document.getElementById('sidebar-close');

  sidebar.style.display = "none";

  toggleBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
  });

    const buttons = document.querySelectorAll('.productSizing button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active')); // Remove active from all
      button.classList.add('active'); // Add active to clicked
    });
  });
});

