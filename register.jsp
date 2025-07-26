<%@ page import="java.sql.*" %>
<%
if(request.getParameter("submit") != null){
    String name = request.getParameter("name");
    String email = request.getParameter("email");
    String pass = request.getParameter("password");

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/fooddb", "root", "Sanket@123");
        PreparedStatement ps = con.prepareStatement("INSERT INTO users(name,email,password) VALUES(?,?,?)");
        ps.setString(1, name);
        ps.setString(2, email);
        ps.setString(3, pass);
        ps.executeUpdate();
        response.sendRedirect("login.jsp?msg=registered");
    } catch(Exception e){ out.println("Error: " + e); }
}
%>
<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <style>
        body { font-family: Arial; background: #f2f2f2; }
        form { width: 300px; margin: 100px auto; padding: 20px; background: white; border-radius: 10px; }
        input { width: 100%; padding: 10px; margin: 5px 0; }
        button { background: #007bff; color: white; padding: 10px; width: 100%; border: none; }
    </style>
</head>
<body>
    <form method="post">
        <h2>Register</h2>
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button name="submit">Register</button>
    </form>
</body>
</html>

