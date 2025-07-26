<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Order Success</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f0fff0;
            text-align: center;
            margin-top: 100px;
        }
        .success-box {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            display: inline-block;
            padding: 30px 50px;
        }
        h1 {
            color: green;
        }
        a {
            display: inline-block;
            margin-top: 20px;
            text-decoration: none;
            color: white;
            background-color: #28a745;
            padding: 10px 20px;
            border-radius: 5px;
        }
        a:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <div class="success-box">
        <h1>✅ Order Placed Successfully!</h1>
        <p>Thank you for your order. Have a nice day 😊</p>
        <a href="menu.jsp">Go Back to Menu</a>
    </div>
</body>
</html>

