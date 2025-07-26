<%@ page import="java.util.*" %>
<%@ page session="true" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
    List<Map<String, Object>> cart = (List<Map<String, Object>>) session.getAttribute("cart");
    if (cart == null || cart.isEmpty()) {
%>
    <html>
    <head><title>Your Cart</title></head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
        <h2>Your Cart is Empty</h2>
        <p><a href="menu.jsp" style="text-decoration:none; color:#007bff;">Go to Menu to Add Items</a></p>
    </body>
    </html>
<%
        return;
    }

    int grandTotal = 0;
%>

<html>
<head>
    <title>Your Cart</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fefefe;
            margin: 20px auto;
            max-width: 700px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
        }
        th {
            background-color: #007bff;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .total-row {
            font-weight: bold;
            font-size: 1.2em;
        }
        a.button {
            display: inline-block;
            padding: 10px 18px;
            margin-right: 15px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        a.button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <h2>Your Cart</h2>
    
    <table>
        <tr>
            <th>Food Item</th>
            <th>Quantity</th>
            <th>Price (₹)</th>
            <th>Total Price (₹)</th>
        </tr>

        <%
            for(Map<String, Object> item : cart) {
                String food = (String) item.get("item");
                int quantity = (int) item.get("quantity");
                int price = (int) item.get("price");
                int total = quantity * price;
                grandTotal += total;
        %>
        <tr>
            <td><%= food %></td>
            <td><%= quantity %></td>
            <td><%= price %></td>
            <td><%= total %></td>
        </tr>
        <% } %>

        <tr class="total-row">
            <td colspan="3">Grand Total</td>
            <td>₹ <%= grandTotal %></td>
        </tr>
    </table>

    <a href="placeorder.jsp" class="button">Place Order</a>
    <a href="menu.jsp" class="button" style="background-color:#28a745;">Continue Shopping</a>

</body>
</html>

