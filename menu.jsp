<%@ page import="java.sql.*, java.util.*" %>
<%@ page session="true" %>
<!DOCTYPE html>
<html>
<head>
    <title>Food Menu</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 0;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-top: 20px;
        }
        .menu-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 30px;
            max-width: 800px;
            margin: auto;
        }
        .menu-item {
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            transition: transform 0.2s ease-in-out;
        }
        .menu-item:hover {
            transform: scale(1.02);
        }
        .food-name {
            font-size: 20px;
            font-weight: bold;
            color: #444;
        }
        .price {
            color: green;
            margin: 10px 0;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        input[type=number] {
            width: 60px;
            padding: 5px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        input[type=submit] {
            background-color: #28a745;
            color: white;
            padding: 8px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
        input[type=submit]:hover {
            background-color: #218838;
        }
        .view-cart {
            text-align: center;
            margin-top: 30px;
        }
        .view-cart a {
            text-decoration: none;
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
        }
        .view-cart a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Our Delicious Menu</h1>
    <div class="menu-container">
        <% 
            String[] items = {"Pizza", "Burger", "Pasta", "Fries", "Sandwich", "Biryani", "Noodles", "Salad", "Ice Cream", "Cold Drink"};
            int[] prices = {120, 80, 100, 60, 70, 150, 90, 50, 60, 40};
            for(int i = 0; i < items.length; i++) {
        %>
        <div class="menu-item">
            <div class="food-name"><%= items[i] %></div>
            <div class="price">₹<%= prices[i] %></div>
            <form action="addtocart.jsp" method="post">
                <input type="hidden" name="item" value="<%= items[i] %>">
                <input type="hidden" name="price" value="<%= prices[i] %>">
                Quantity:
                <input type="number" name="quantity" value="1" min="1">
                <input type="submit" value="Add to Cart">
            </form>
        </div>
        <% } %>
    </div>

    <div class="view-cart">
        <a href="cart.jsp">View Cart</a>
    </div>
</body>
</html>

