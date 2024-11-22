function validateCheckoutForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("cont").value;
    const address = document.getElementById("address").value;

    if (name === "" || phone === "" || address === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    return true;
}
document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTable = document.getElementById("checkout-cart-table");
    const totalPriceElement = document.getElementById("checkout-total-price");
    const cartDataInput = document.getElementById("cart-data"); // Hidden input field to store cart data

    let totalPrice = 0;
    let cartData = [];

    cartItems.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.title}</td>
            <td>KES ${item.price}</td>
            <td>1</td> <!-- Assuming 1 for simplicity -->
            <td>KES ${item.price}</td>
        `;
        totalPrice += item.price;
        cartTable.appendChild(row);

        // Push item data to the cartData array for submission
        cartData.push({
            title: item.title,
            price: item.price,
            quantity: 1 // Assuming 1 for simplicity
        });
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Populate the hidden cart data field with JSON-encoded cart data
    cartDataInput.value = JSON.stringify(cartData);
});
