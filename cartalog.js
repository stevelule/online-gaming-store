// Function to add a game to the shopping cart
function addToCart(gameTitle, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { title: gameTitle, price: price };
    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Create a success message
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('success-message');
    messageDiv.textContent = `${gameTitle} has been added to your cart!`;
  
    const body = document.querySelector('body');
    body.prepend(messageDiv);
    
    // Remove message after 3 seconds
    setTimeout(() => { messageDiv.remove(); }, 3000);
  }
  