<%@ page import="java.sql.*" %>
<%
if(request.getParameter("login") != null){
    String email = request.getParameter("email");
    String pass = request.getParameter("password");

    if(email.equals("admin") && pass.equals("admin123")){
        response.sendRedirect("admin.jsp");
        return;
    }

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/fooddb", "root", "Sanket@123");
        PreparedStatement ps = con.prepareStatement("SELECT * FROM users WHERE email=? AND password=?");
        ps.setString(1, email);
        ps.setString(2, pass);
        ResultSet rs = ps.executeQuery();

        if(rs.next()){
            session.setAttribute("user", email);
            response.sendRedirect("menu.jsp");
        } else {
            out.println("<script>alert('Invalid Email or Password');</script>");
        }
    } catch(Exception e){ out.println("Error: " + e); }
}
%>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body { font-family: Arial; background: #f2f2f2; }
        form { width: 300px; margin: 100px auto; padding: 20px; background: white; border-radius: 10px; }
        input { width: 100%; padding: 10px; margin: 5px 0; }
        button { background: #007bff; color: white; padding: 10px; width: 100%; border: none; }
    </style>
</head>
<body>
    <form method="post">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button name="login">Login</button>
    </form>
</body>
</html>

