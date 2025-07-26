<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <style>
        body {
            font-family: Arial;
            background-color: #f0f8ff;
            padding: 40px;
            text-align: center;
        }
        form {
            display: inline-block;
            background-color: #fff;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 10px gray;
        }
        input[type="text"], input[type="email"], input[type="password"] {
            width: 250px;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
        input[type="submit"] {
            padding: 10px 30px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
        a {
            display: block;
            margin-top: 15px;
            color: #007bff;
        }
    </style>
</head>
<body>
    <h2>Create a New Account</h2>
    <form action="register.jsp" method="post">
        <input type="text" name="name" placeholder="Full Name" required><br>
        <input type="email" name="email" placeholder="Email ID" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <input type="submit" value="Register">
    </form>
    <a href="index.jsp">Already have an account? Login</a>
</body>
</html>

