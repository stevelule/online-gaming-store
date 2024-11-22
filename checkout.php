<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "online gaming store";
$port = 3308; // Specify the custom port

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname, $port);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve and sanitize form data
$name = mysqli_real_escape_string($conn, $_POST['name']);
$phone = mysqli_real_escape_string($conn, $_POST['cont']);
$address = mysqli_real_escape_string($conn, $_POST['address']);
$payment = mysqli_real_escape_string($conn, $_POST['payment']);
$cartData = json_decode($_POST['cart-data'], true); // Decode the cart data from JSON

// Insert the order details into the checkout table
$order_id = uniqid(); // Generate a unique order ID
foreach ($cartData as $item) {
    $title = mysqli_real_escape_string($conn, $item['title']);
    $price = $item['price'];
    $quantity = $item['quantity'];

    // Prepare the SQL statement to insert item data
    $sql = "INSERT INTO checkout (order_id, title, price, quantity, name, phone_number, address, payment_method) 
            VALUES ('$order_id', '$title', $price, $quantity, '$name', '$phone', '$address', '$payment')";

    // Execute the query
    if (!mysqli_query($conn, $sql)) {
        echo "Error: " . mysqli_error($conn);
    }
}

// Success message
echo "<div style='text-align: center; padding: 20px; background-color: #4CAF50; color: white; font-size: 18px; border-radius: 5px;'>Order placed successfully!</div>";

// Button with styling
echo "
<div style='
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    background-image: url(success.jpeg); 
    background-size: cover; 
    background-position: center; 
    text-align: center; 
    color: #333;'>
    <div>
        <h2>Order placed successfully!</h2>
        <button onclick=\"window.location.href='index.html'\" 
        style='padding: 10px 20px; background-color: #008CBA; color: white; border: none; border-radius: 5px; font-size: 16px; cursor: pointer;'>
        Go to Home</button>
    </div>
</div>
";


// Close connection
mysqli_close($conn);
?>
