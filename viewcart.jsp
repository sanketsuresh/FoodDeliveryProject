<%@ page import="java.util.*, javax.servlet.http.*, javax.servlet.*" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    HttpSession session = request.getSession(false);
    if (session == null || session.getAttribute("email") == null) {
        response.sendRedirect("login.jsp");
        return;
    }

    List<String> cart = (List<String>) session.getAttribute("cart");
%>
<!DOCTYPE html>
<html>
<head>
    <title>Your Cart</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 60%;
            margin: 40px auto;
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px #ccc;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background: #e0ffe0;
            margin: 10px 0;
            padding: 12px;
            border-radius: 6px;
            font-size: 18px;
        }
        .btn {
            display: block;
            width: 200px;
            margin: 30px auto 0;
            padding: 12px;
            text-align: center;
            background-color: #28a745;
            color: white;
            text-decoration: none;
            border-radius: 6px;
        }
        .btn:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
<div class="container">
    <h2>Your Cart Items</h2>
    <%
        if (cart == null || cart.isEmpty()) {
    %>
        <p>Your cart is empty!</p>
    <%
        } else {
    %>
        <ul>
        <%
            for (String item : cart) {
        %>
            <li><%= item %></li>
        <%
            }
        %>
        </ul>
        <a href="placeorder.jsp" class="btn">Place Order</a>
    <%
        }
    %>
</div>
</body>
</html>

