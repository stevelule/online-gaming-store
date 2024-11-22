// Function to add a game to the shopping cart
function addToCart(gameTitle, price) {
    // Get the current cart from localStorage (or initialize it if it doesn't exist)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Create a new item object for the cart
    const newItem = {
      title: gameTitle,
      price: price
    };
  
    // Add the new item to the cart array
    cart.push(newItem);
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Create the success message element
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('success-message');
    messageDiv.textContent = `${gameTitle} has been added to your cart!`;
  
    // Find the element where the message should be shown (in this case, let's append to the top of the body)
    const body = document.querySelector('body');
    
    // Add the message to the top of the page
    body.prepend(messageDiv);
  
    // Remove the message after 3 seconds (to hide it automatically)
    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }
  
  // Function to display cart items in the Cart page
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.getElementById('cart-table');
    let totalPrice = 0;
  
    // Clear any previous cart items
    cartTable.innerHTML = `
      <tr>
        <th>Game</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    `;
  
    // Display the cart items in the table
    cart.forEach((item, index) => {
      totalPrice += item.price;
  
      let row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td>1</td> <!-- Assuming 1 for simplicity -->
        <td>${item.price}</td>
        <td><button onclick="removeFromCart(${index})">Remove</button></td>
      `;
  
      cartTable.appendChild(row);
    });
  
    // Display the total price
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
  }
  
  // Function to remove an item from the cart
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Remove the item at the specified index
    cart.splice(index, 1);
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Refresh the cart display
    displayCart();
  }
  
  // Call displayCart() when the Cart page is loaded to show the stored items
  if (window.location.pathname.includes('cart.html')) {
    window.onload = displayCart;
  }
  // Function to display cart items in the Cart page
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartTable = document.getElementById('cart-table');
  let totalPrice = 0;

  cartTable.innerHTML = `
    <tr>
      <th>Game</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
      <th>Action</th>
    </tr>
  `;

  cart.forEach((item, index) => {
    totalPrice += item.price;
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>1</td>
      <td>${item.price}</td>
      <td><button onclick="removeFromCart(${index})">Remove</button></td>
    `;
    cartTable.appendChild(row);
  });

  document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// Call displayCart() when the Cart page is loaded to show the stored items
if (window.location.pathname.includes('cart.html')) {
  window.onload = displayCart;
}
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
